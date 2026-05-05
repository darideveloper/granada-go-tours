function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export const generateAvailability = (tourId: string | null): Date[] => {
  const limitedDates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    
    const dayOfWeek = d.getDay();
    
    // Weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      limitedDates.push(d);
      continue;
    }
    
    // For weekdays, compute week start (Monday) to ensure determinism per week
    const diffToMonday = 1 - dayOfWeek;
    const monday = new Date(d);
    monday.setDate(d.getDate() + diffToMonday);
    const weekStr = `${monday.getFullYear()}-${monday.getMonth() + 1}-${monday.getDate()}`;
    
    const weekHash = simpleHash(`${weekStr}-${tourId || 'general'}`);
    const numLimitedDays = weekHash % 3; // 0, 1, or 2 days per week
    
    const limitedWeekdays = new Set<number>();
    let currentHash = weekHash;
    
    // Deterministically pick `numLimitedDays` unique weekdays
    while (limitedWeekdays.size < numLimitedDays) {
      currentHash = simpleHash(currentHash.toString());
      const selectedDay = (currentHash % 5) + 1; // 1 to 5 (Monday to Friday)
      limitedWeekdays.add(selectedDay);
    }
    
    if (limitedWeekdays.has(dayOfWeek)) {
      limitedDates.push(d);
    }
  }
  
  return limitedDates;
};
