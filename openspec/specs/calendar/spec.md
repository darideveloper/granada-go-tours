# calendar Specification

## Purpose
TBD - created by archiving change render-booking-calendar. Update Purpose after archive.
## Requirements
### Requirement: Visual Status Representation
The calendar SHALL visually distinguish between dates based on their availability status using brand-aligned colors.

#### Scenario: Verify Availability Coloring
- Given a `bookingData` object with different statuses.
- When the calendar is rendered.
- Then "Available" dates MUST show green accents, "Limited" MUST show gold accents, and "Full" MUST show red accents.

### Requirement: Interactive Date Selection
The component SHALL allow users to select a single date and display its detailed status.

#### Scenario: Update Status on Selection
- Given the Booking Calendar is displayed.
- When a user clicks on an "Available" date.
- Then the status display area MUST update to show "Available" and include the correct icon (CheckCircle2).

### Requirement: Data Structure Compatibility
The component SHALL consume a standardized availability data structure that aligns with the backend/JSON schema.

#### Scenario: Mock Data Integration
- **GIVEN** a `bookingData` structure (e.g. from `useBookingStore`)
- **WHEN** it contains `booked`, `limited`, and `available` arrays of `Date` objects
- **THEN** all specified dates MUST be correctly mapped to their respective modifiers in the calendar component.

#### Scenario: Status Keys Consistency
- **GIVEN** the `STATUS_CONFIG` object
- **WHEN** statuses are assigned
- **THEN** the keys MUST be `available`, `limited`, `booked`, and `standard`.

