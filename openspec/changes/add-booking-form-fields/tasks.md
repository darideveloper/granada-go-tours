# Tasks: Add Booking Form Fields

- [ ] **Research & Setup**
    - [ ] Verify `src/data/tours.json` structure for Tour Select population.
    - [ ] Confirm layout constraints in `src/pages/index.astro`.

- [ ] **UI Atoms Development**
    - [ ] Create `src/components/atoms/ui/label.tsx`.
    - [ ] Create `src/components/atoms/ui/input.tsx`.
    - [ ] Create `src/components/atoms/ui/textarea.tsx`.
    - [ ] Create `src/components/atoms/ui/select.tsx` (using Radix UI primitives if available, or a styled native select for simplicity/DRY).

- [ ] **Form Component Implementation**
    - [ ] Create `src/components/organisms/BookingForm.tsx`.
    - [ ] Implement fields: Full Name, Email, Tour, Guests, Special Requests.
    - [ ] Connect fields to `useBookingStore`.

- [ ] **Layout Integration**
    - [ ] Create `src/components/organisms/BookingWidget.tsx` to combine `BookingForm` and `BookingCalendar`.
    - [ ] Update `src/pages/index.astro` to use `BookingWidget` instead of `BookingCalendar`.
    - [ ] Ensure responsive behavior (Form on top/bottom of Calendar on mobile, Left of Calendar on Desktop).

- [ ] **Validation & Refinement**
    - [ ] Apply brand colors to all new components.
    - [ ] Verify store updates on input change.
    - [ ] Test layout on different screen sizes.
