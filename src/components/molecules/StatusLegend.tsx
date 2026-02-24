import React from 'react';
import { cn } from "@/lib/utils";
import { STATUS_CONFIG } from '@/components/organisms/types';

export function StatusLegend() {
  const legendItems = (['available', 'limited', 'booked'] as const).map(key => ({
    key,
    ...STATUS_CONFIG[key]
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-2">
      {legendItems.map(({ key, label, classes }) => (
        <div key={key} className="flex items-center gap-1.5">
          <div className={cn("w-3 h-3 rounded-full", classes.legendMarker)} />
          <span className="text-xs text-foreground font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
}
