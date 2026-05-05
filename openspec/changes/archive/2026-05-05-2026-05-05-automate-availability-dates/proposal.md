# Proposal: Automate Availability Date Generation

## Problem Statement
Currently, tour availability dates are hardcoded in `src/data/tours.json`. This is prone to becoming outdated and requires manual effort to refresh.

## Proposed Solution
Automate the generation of `limited` dates for all tours.
- The generation horizon will be the next 1 year (12 months) from the current date.
- Weekends (Saturday and Sunday) will automatically be marked as `limited`.
- Weekdays (Monday to Friday) will be assigned 0-2 random `limited` days per week. This randomness MUST be deterministic (e.g., based on the date string) so that the UI does not shift on page reloads.
- The existing "next 12 days" urgency feature (virtual limited dates) will be preserved and run alongside this new logic.
- **Visual Horizon**: Although availability is generated for 1 year, the UI will only display "limited" or "booked" statuses for the next 60 days. Any date beyond 60 days will be visually overwritten as "available".
- This logic will be moved from static JSON into the `useBookingStore` or a dedicated data utility.

## Benefits
- Reduced maintenance effort for static data.
- More predictable and consistently updated availability calendar.
- Eliminates manual JSON entry errors.
- Ensures consistent user experience with deterministic dates while retaining the urgency of the next 12 days.
