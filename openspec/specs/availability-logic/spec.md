# availability-logic Specification

## Purpose
TBD - created by archiving change 2026-05-05-automate-availability-dates. Update Purpose after archive.
## Requirements
### Requirement: Dynamic Limited Availability Generation
- The system MUST generate availability dates for a horizon of 1 year (365 days) from the current date.
- The system MUST automatically mark all Saturdays and Sundays within the horizon as "limited".
- The system MUST select 0-2 random weekdays (Monday-Friday) per week to be marked as "limited".
- The random selection MUST be deterministic based on the date, ensuring consistency across page reloads.
- The system MUST preserve the existing "next 12 days" urgency feature (virtual limited dates).
- The UI MUST only display "limited" or "booked" statuses for dates within a 60-day horizon from today.
- Dates beyond the 60-day horizon MUST be displayed as "available".
- This logic MUST be applied at runtime, removing the need for static `limited` lists in `tours.json`.

#### Scenario: Weekend Automatic Limitation
- **Given** a date range in the booking calendar for the next 12 months
- **When** the user opens the calendar for any tour
- **Then** all Saturdays and Sundays within the 60-day horizon should be rendered with 'limited' status.

#### Scenario: Deterministic Weekday Random Selection
- **Given** a tour calendar
- **When** the availability is generated for the next 12 months
- **Then** a subset of 0-2 weekdays per week should be marked as 'limited' deterministically, remaining consistent on subsequent reloads, but only visible if within the 60-day horizon.

#### Scenario: Preserving Urgency Logic
- **Given** a tour calendar
- **When** the availability is displayed
- **Then** the next 12 days from today MUST still be marked as limited if not already booked, alongside the weekends and random weekdays.

#### Scenario: 60-Day Visual Horizon
- **Given** a date that is more than 60 days in the future
- **When** the user views the calendar
- **Then** that date MUST always show as "available", even if it is a weekend or a generated "limited" weekday.

