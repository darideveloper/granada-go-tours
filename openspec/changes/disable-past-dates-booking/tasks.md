# Tasks: Disable Past Dates

## 1. Preparation
- [ ] Define `today` constant in `BookingCalendar.tsx` using `useMemo`. <!-- id: task-define-today -->

## 2. Implementation
- [ ] Update `disabled` prop in `Calendar` to include dates `<= today`. <!-- id: task-update-disabled-prop -->
- [ ] Update `modifiers` logic to only highlight dates `> today`. <!-- id: task-update-modifiers-logic -->
- [ ] Update `getStatus` helper to respect the "future only" rule. <!-- id: task-update-getstatus-logic -->

## 3. Validation
- [ ] Verify that today's date is greyed out and unclickable. <!-- id: task-verify-today-disabled -->
- [ ] Verify that yesterday's date is greyed out and unclickable. <!-- id: task-verify-yesterday-disabled -->
- [ ] Verify that tomorrow's date remains selectable (if available). <!-- id: task-verify-tomorrow-enabled -->
