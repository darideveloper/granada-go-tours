# Spec: Centralized State Management

## Purpose
This spec defines the requirements for managing application state (such as booking details and user selections) using a centralized store, ensuring data consistency and reactivity across the entire user interface.

## Requirements

### Requirement: Centralized Booking State
The application SHALL manage booking-related data (e.g., selected date, user details) in a centralized store to ensure state consistency across components.

#### Scenario: Update Selected Date
- **GIVEN** the application is using a centralized booking store.
- **WHEN** a user selects a date on the `BookingCalendar`.
- **THEN** the `selectedDate` in the centralized store MUST be updated to reflect the choice.

### Requirement: State Reactivity
UI components SHALL automatically react to changes in the centralized booking store.

#### Scenario: Reflect State in UI
- **GIVEN** the `BookingCalendar` is rendered.
- **WHEN** the `selectedDate` in the store is changed (either by the calendar or externally).
- **THEN** the calendar's selection and the status display MUST update to show the new date.
