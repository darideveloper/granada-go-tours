import React from 'react';
import { Info, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export type StatusKey = 'booked' | 'limited' | 'available' | 'standard';

export interface StatusConfigValue {
  label: string;
  icon: React.ElementType;
  classes: {
    container: string;
    badge: string;
    icon: string;
    modifier?: string;
    legendMarker: string;
  };
}

export const STATUS_CONFIG: Record<StatusKey, StatusConfigValue> = {
  available: {
    label: 'Disponible',
    icon: CheckCircle2,
    classes: {
      container: 'bg-primary/5 border-primary/10',
      badge: 'border-primary text-primary bg-primary/5',
      icon: 'text-primary',
      modifier: 'bg-primary text-primary-foreground font-bold !hover:bg-foreground !hover:text-background',
      legendMarker: 'bg-primary border-primary',
    }
  },
  limited: {
    label: 'Limitada',
    icon: AlertCircle,
    classes: {
      container: 'bg-muted/50 border-border',
      badge: 'border-muted-foreground/30 text-muted-foreground bg-muted',
      icon: 'text-muted-foreground',
      modifier: 'bg-muted text-muted-foreground border-b-2 border-muted-foreground rounded-none !hover:bg-foreground !hover:text-background',
      legendMarker: 'bg-muted border-muted-foreground/30',
    }
  },
  booked: {
    label: 'Completo',
    icon: XCircle,
    classes: {
      container: 'bg-destructive/5 border-destructive/10',
      badge: 'border-destructive text-destructive bg-destructive/5',
      icon: 'text-destructive',
      modifier: 'bg-destructive/10 text-destructive line-through opacity-50 cursor-not-allowed',
      legendMarker: 'bg-destructive/20 opacity-50',
    }
  },
  standard: {
    label: 'Estándar',
    icon: Info,
    classes: {
      container: 'bg-accent/5 border-border',
      badge: 'border-border text-muted-foreground bg-muted/20',
      icon: 'text-muted-foreground',
      legendMarker: 'bg-accent border-border',
    }
  }
};
