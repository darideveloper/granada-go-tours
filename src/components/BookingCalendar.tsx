import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

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
    getRelativeDate(0), // Today
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
   * Using semantic theme variables
   */
  const modifiersClassNames = {
    booked: "bg-destructive/10 text-destructive line-through opacity-50 cursor-not-allowed hover:bg-destructive/10",
    limited: "bg-muted text-muted-foreground border-b-2 border-muted-foreground rounded-none",
    available: "bg-primary text-primary-foreground font-bold",
  };

  // Helper to check the status of a selected date
  const getStatus = (d: Date | undefined) => {
    if (!d) return null;
    const dateStr = d.toDateString();
    if (bookingData.fullyBooked.some(date => date.toDateString() === dateStr)) return "Full";
    if (bookingData.limitedAvailability.some(date => date.toDateString() === dateStr)) return "Limited";
    if (bookingData.available.some(date => date.toDateString() === dateStr)) return "Available";
    return "Standard";
  };

  const status = getStatus(date);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-muted/30 space-y-6 rounded-3xl border border-border">
      <Card className="w-full max-w-md shadow-xl border-none bg-background">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif font-bold text-foreground tracking-tight">Booking Schedule</CardTitle>
          <CardDescription className="font-sans">Visual availability for the current month</CardDescription>
        </CardHeader>
        
        <CardContent className="flex flex-col items-center gap-6">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-primary border border-primary" />
              <span className="text-xs text-foreground font-medium">Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-muted border border-muted-foreground/30" />
              <span className="text-xs text-foreground font-medium">Limited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/20 opacity-50" />
              <span className="text-xs text-foreground font-medium">Full</span>
            </div>
          </div>

          <div className="p-3 bg-background rounded-xl border border-border shadow-sm">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-none"
              modifiers={modifiers}
              modifiersClassNames={modifiersClassNames}
              disabled={bookingData.fullyBooked}
            />
          </div>

          {/* Status Display */}
          {date && (
            <div className={cn(
              "w-full p-4 rounded-lg flex items-center justify-between transition-all duration-300 border",
              status === 'Full' ? 'bg-destructive/5 border-destructive/10' :
              status === 'Limited' ? 'bg-muted/50 border-border' :
              status === 'Available' ? 'bg-primary/5 border-primary/10' :
              'bg-accent/5 border-border'
            )}>
              <div className="flex items-center gap-3">
                {status === 'Full' && <XCircle className="text-destructive w-5 h-5" />}
                {status === 'Limited' && <AlertCircle className="text-muted-foreground w-5 h-5" />}
                {status === 'Available' && <CheckCircle2 className="text-primary w-5 h-5" />}
                {status === 'Standard' && <Info className="text-muted-foreground w-5 h-5" />}
                
                <div>
                  <p className="text-[10px] font-sans font-semibold text-foreground/60 uppercase tracking-widest">Selected Date</p>
                  <p className="font-bold text-foreground font-sans">
                    {date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              
              <Badge 
                variant="outline"
                className={cn(
                  "capitalize px-3 py-0.5 font-sans border",
                  status === 'Full' ? 'border-destructive text-destructive bg-destructive/5' : 
                  status === 'Limited' ? 'border-muted-foreground/30 text-muted-foreground bg-muted' : 
                  status === 'Available' ? 'border-primary text-primary bg-primary/5' : 
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
        <p>Availability is updated daily. Select a date to see details and proceed with your booking enquiry.</p>
      </div>
    </div>
  );
}
