import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from "@/lib/utils";
import { STATUS_CONFIG, type StatusKey } from './types';

interface StatusDetailsProps {
  date: Date;
  statusKey: StatusKey;
}

export function StatusDetails({ date, statusKey }: StatusDetailsProps) {
  const config = STATUS_CONFIG[statusKey];
  const Icon = config.icon;

  return (
    <div className={cn(
      "w-full p-4 rounded-lg flex items-center justify-between transition-all duration-300 border",
      config.classes.container
    )}>
      <div className="flex items-center gap-3">
        <Icon className={cn("w-5 h-5", config.classes.icon)} />
        <div>
          <p className="text-[10px] font-sans font-semibold text-foreground/60 uppercase tracking-widest">Fecha Seleccionada</p>
          <p className="font-bold text-foreground font-sans">
            {date.toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
      
      <Badge variant="outline" className={cn("capitalize px-3 py-0.5 font-sans border", config.classes.badge)}>
        {config.label}
      </Badge>
    </div>
  );
}
