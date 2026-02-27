# Tasks: Unify Tours Date Patterns

## Data Modification
- [ ] Reset `booked` dates to `[]` for all tours in `src/data/tours.json`. <!-- id: 0 -->
- [ ] Standardize `limited` dates for all tours to include all weekends in March and April 2026. <!-- id: 1 -->
- [ ] Distribute 1-2 random weekdays as `limited` for each tour. <!-- id: 2 -->
- [ ] Set all remaining weekdays in March and April 2026 as `available`. <!-- id: 3 -->
- [ ] Special attention to `palacios-nazaries` to move the majority of its dates from `limited` to `available`. <!-- id: 4 -->

## Validation
- [ ] Verify that no date appears in more than one array for any tour. <!-- id: 5 -->
- [ ] Verify that all tours have a non-empty `available` and `limited` list. <!-- id: 6 -->
- [ ] Verify that `booked` is empty for all tours. <!-- id: 7 -->
