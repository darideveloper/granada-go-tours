# Change: Update Tours Availability 2026

## Why
The current tour availability data in `src/data/tours.json` is outdated or contains placeholder values. This change provides realistic availability for March and April 2026, reflecting the high-demand "Semana Santa" period in Granada.

## What Changes
- Update `dates` object for all 14 tours in `src/data/tours.json`.
- Populate `available` and `limited` arrays with specific dates for March and April 2026.
- Add realistic `booked` dates for peak holidays (e.g., April 2nd and 3rd).
- Align `calendar` and `tours-data` specifications with the actual data structure and implementation.

## Impact
- Affected specs: `tours-data`, `calendar`.
- Affected code: `src/data/tours.json`.
