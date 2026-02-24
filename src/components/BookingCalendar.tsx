import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
import { es } from 'date-fns/locale';

/**
 * GENERATING DYNAMIC MOCK DATA
 */
const today = new Date();
const getRelativeDate = (days: number) => {
  const d = new Date();
  d.setDate(today.getDate() + days);
  return d;
};

const bookingData = {
  fullyBooked: [
    today,
    getRelativeDate(1),
    getRelativeDate(5),
    getRelativeDate(12),
  ],
  limitedAvailability: [
    getRelativeDate(2),
    getRelativeDate(8),
    getRelativeDate(9),
  ],
  available: [
    getRelativeDate(3),
    getRelativeDate(4),
    getRelativeDate(10),
  ]
};

export function BookingCalendar() {
  const [date, setDate] = useState<Date | undefined>(today);

  // Define the modifiers for react-day-picker
  const modifiers = {
    booked: bookingData.fullyBooked,
    limited: bookingData.limitedAvailability,
    available: bookingData.available,
  };

  /**
   * Define the styles for each modifier.
   * Using semantic theme variables and brand hover
   */
  const modifiersClassNames = {
    booked: "bg-destructive/10 text-destructive line-through opacity-50 cursor-not-allowed",
    limited: "bg-muted text-muted-foreground border-b-2 border-muted-foreground rounded-none !hover:bg-foreground !hover:text-background",
    available: "bg-primary text-primary-foreground font-bold !hover:bg-foreground !hover:text-background",
  };

  // Helper to check the status of a selected date
  const getStatus = (d: Date | undefined) => {
    if (!d) return null;
    const dateStr = d.toDateString();
    if (bookingData.fullyBooked.some(date => date.toDateString() === dateStr)) return "Completo";
    if (bookingData.limitedAvailability.some(date => date.toDateString() === dateStr)) return "Limitada";
    if (bookingData.available.some(date => date.toDateString() === dateStr)) return "Disponible";
    return "Estándar";
  };

  const status = getStatus(date);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-muted/30 space-y-6 rounded-3xl border border-border">
      <Card className="w-full max-w-md shadow-xl border-none bg-background">
        <CardContent className="flex flex-col items-center gap-6 pt-6">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-primary border border-primary" />
              <span className="text-xs text-foreground font-medium">Disponible</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-muted border border-muted-foreground/30" />
              <span className="text-xs text-foreground font-medium">Limitada</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/20 opacity-50" />
              <span className="text-xs text-foreground font-medium">Completo</span>
            </div>
          </div>

          <div className="p-3 bg-background rounded-xl border border-border shadow-sm">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={es}
              className="rounded-md border-none"
              classNames={{
                day: cn(
                  "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
                  "hover:bg-foreground hover:text-background rounded-md transition-colors"
                ),
                disabled: "hover:bg-transparent hover:text-muted-foreground",
              }}
              modifiers={modifiers}
              modifiersClassNames={modifiersClassNames}
              disabled={bookingData.fullyBooked}
            />
          </div>

          {/* Status Display */}
          {date && (
            <div className={cn(
              "w-full p-4 rounded-lg flex items-center justify-between transition-all duration-300 border",
              status === 'Completo' ? 'bg-destructive/5 border-destructive/10' :
              status === 'Limitada' ? 'bg-muted/50 border-border' :
              status === 'Disponible' ? 'bg-primary/5 border-primary/10' :
              'bg-accent/5 border-border'
            )}>
              <div className="flex items-center gap-3">
                {status === 'Completo' && <XCircle className="text-destructive w-5 h-5" disabled />}
                {status === 'Limitada' && <AlertCircle className="text-muted-foreground w-5 h-5" />}
                {status === 'Disponible' && <CheckCircle2 className="text-primary w-5 h-5" />}
                {status === 'Estándar' && <Info className="text-muted-foreground w-5 h-5" />}
                
                <div>
                  <p className="text-[10px] font-sans font-semibold text-foreground/60 uppercase tracking-widest">Fecha Seleccionada</p>
                  <p className="font-bold text-foreground font-sans">
                    {date.toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              
              <Badge 
                variant="outline"
                className={cn(
                  "capitalize px-3 py-0.5 font-sans border",
                  status === 'Completo' ? 'border-destructive text-destructive bg-destructive/5' : 
                  status === 'Limitada' ? 'border-muted-foreground/30 text-muted-foreground bg-muted' : 
                  status === 'Disponible' ? 'border-primary text-primary bg-primary/5' : 
                  'border-border text-muted-foreground bg-muted/20'
                )}
              >
                {status}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="max-w-md text-center text-foreground/40 text-xs font-sans italic">
        <p>La disponibilidad se actualiza diariamente. Seleccione una fecha para ver los detalles y proceder con su consulta de reserva.</p>
      </div>
    </div>
  );
}
