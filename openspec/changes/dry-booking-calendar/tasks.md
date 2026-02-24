# Tasks: DRY BookingCalendar Refactor

- [ ] **Data & Config Setup**
    - [ ] Unify status keys: `booked`, `limited`, `available`, `standard`.
    - [ ] Rename `bookingData` properties: `fullyBooked` -> `booked`, `limitedAvailability` -> `limited`.
    - [ ] Define `STATUS_CONFIG` object with labels, icons, and color mappings (including `modifier` classes for the calendar).
    - [ ] Define TypeScript types for status keys and config.

- [ ] **Sub-component Implementation**
    - [ ] Create `StatusLegend` component.
    - [ ] Create `StatusDetails` component.

- [ ] **Main Component Refactor**
    - [ ] Integrate `STATUS_CONFIG` into `BookingCalendar`.
    - [ ] Use `STATUS_CONFIG` to generate `modifiersClassNames` dynamically.
    - [ ] Replace repetitive JSX in the main render function with sub-components.
    - [ ] Optimize the `getStatus` logic to return unified status keys.

- [ ] **Validation**
    - [ ] Verify that all availability states still render correctly.
    - [ ] Verify interactivity (date selection) still functions as expected.
    - [ ] Run `openspec validate dry-booking-calendar`.
