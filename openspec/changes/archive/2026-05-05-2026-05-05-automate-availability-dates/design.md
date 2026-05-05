# Design: Dynamic Availability Logic

## Overview
We will transition from static `limited` dates in `tours.json` to a dynamic computation, preserving the existing "next 12 days" urgency feature.

## Implementation Plan
1. **Utility Creation**: Create `src/lib/availability.ts` to contain the logic for generating availability dates based on the defined rules (Weekends + Random Weekdays).
2. **Determinism**: The random weekday selection will use a deterministic hash (e.g., based on the date timestamp or string) so that `limited` days remain consistent across renders and sessions.
3. **Horizon**: The generator will create the `limited` dates array for the next 365 days (1 year).
4. **Store Integration**: Update `src/store/useBookingStore.ts` to call this utility when initializing tour availability. This will run alongside the existing `injectVirtualLimitedDates` function to ensure the next 12 days urgency is kept.
5. **UI Horizon Constraint**: Modify `src/components/organisms/BookingCalendar.tsx` to enforce a 60-day visual window. Dates beyond `today + 60 days` will ignore their "limited" or "booked" status and display as "available".
6. **Data Cleanup**: Remove the `limited` field from `dates` in `src/data/tours.json` to prevent confusion, keeping only `booked` for manual overrides.

## Trade-offs
- **Pros**: Dynamic, scalable, maintenance-free. Ensures a stable UI via deterministic logic.
- **Cons**: Slightly more complex logic at runtime; hardcoded manual overrides in JSON will no longer work for 'limited' (though they will remain for 'booked').
