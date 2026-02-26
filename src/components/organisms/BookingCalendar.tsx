import React, { useMemo } from 'react';
import { Calendar } from '@/components/atoms/ui/calendar';
import { Card, CardContent } from '@/components/atoms/ui/card';
import { cn } from "@/lib/utils";
import { es } from 'date-fns/locale';
import { STATUS_CONFIG, type StatusKey, type StatusConfigValue } from './types';
import { StatusLegend } from '@/components/molecules/StatusLegend';
import { StatusDetails } from '@/components/molecules/StatusDetails';
import { useBookingStore } from '@/store/useBookingStore';

/**
 * MAIN COMPONENT
 */
export function BookingCalendar() {
  const selectedDate = useBookingStore((state) => state.selectedDate);
  const setSelectedDate = useBookingStore((state) => state.setSelectedDate);
  const availability = useBookingStore((state) => state.availability);

  const modifiers = useMemo(() => ({
    booked: availability.booked,
    limited: availability.limited,
    available: availability.available,
  }), [availability]);

  const modifiersClassNames = useMemo(() => {
    const classNames: Record<string, string> = {};
    (Object.entries(STATUS_CONFIG) as [StatusKey, StatusConfigValue][]).forEach(([key, value]) => {
      if (value.classes.modifier) {
        classNames[key] = value.classes.modifier;
      }
    });
    return classNames;
  }, []);

  const getStatus = (d: Date | undefined): StatusKey => {
    if (!d) return 'standard';
    const dateStr = d.toDateString();
    if (availability.booked.some(date => date.toDateString() === dateStr)) return 'booked';
    if (availability.limited.some(date => date.toDateString() === dateStr)) return 'limited';
    if (availability.available.some(date => date.toDateString() === dateStr)) return 'available';
    return 'standard';
  };

  const statusKey = getStatus(selectedDate);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-muted/30 space-y-6 rounded-3xl border border-border h-full">
      <Card className="w-full max-w-md shadow-xl border-none bg-background flex-1">
        <CardContent className="flex flex-col items-center gap-6 pt-6 h-full justify-center">
          <StatusLegend />

          <div className="p-3 bg-background rounded-xl border border-border shadow-sm">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
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
              disabled={availability.booked}
            />
          </div>

          {selectedDate && <StatusDetails date={selectedDate} statusKey={statusKey} />}
        </CardContent>
      </Card>

      <div className="max-w-md text-center text-foreground/40 text-xs font-sans italic">
        <p>La disponibilidad se actualiza diariamente. Seleccione una fecha para ver los detalles y proceder con su consulta de reserva.</p>
      </div>
    </div>
  );
}
