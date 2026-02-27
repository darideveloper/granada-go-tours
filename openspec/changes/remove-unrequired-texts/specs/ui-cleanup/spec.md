# ui-cleanup Specification Delta

## REMOVED Requirements
### Requirement: Step Indicators
The booking flow SHALL NOT display the "Paso X de Y" indicators on the calendar or the form.

#### Scenario: No Step Indicator in Step 1
- **Given** the user is on the `BookingCalendar`
- **Then** the text "Paso 1 de 2" MUST NOT be visible.

#### Scenario: No Step Indicator in Step 2
- **Given** the user is on the `BookingForm`
- **Then** the text "Paso 2 de 2" MUST NOT be visible.

### Requirement: Step 1 Header Texts
The `BookingCalendar` SHALL NOT display redundant header titles or descriptions.

#### Scenario: No Header in BookingCalendar
- **Given** the user is on the `BookingCalendar`
- **Then** the text "Selecciona tu Tour y Fecha" MUST NOT be visible.
- **And** the text "Elige el tour que deseas realizar y busca un día disponible." MUST NOT be visible.
