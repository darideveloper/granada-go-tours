# Design: Remove Unrequired UI Texts

## Components to Modify
- `src/components/organisms/BookingCalendar.tsx`
- `src/components/organisms/BookingForm.tsx`

## Changes in `BookingCalendar.tsx`
- Remove the `<div className="flex justify-between items-center mb-1">` block containing the "Paso 1 de 2" indicator.
- Remove the `<CardTitle className="text-xl font-serif text-brand-charcoal">Selecciona tu Tour y Fecha</CardTitle>` element.
- Remove the `<CardDescription className="text-xs text-brand-charcoal/60">Elige el tour que deseas realizar y busca un día disponible.</CardDescription>` element.
- Ensure the `<CardHeader>` still provides appropriate padding if any elements remain, or remove it if empty.

## Changes in `BookingForm.tsx`
- Remove the `<div className="flex justify-between items-center mb-1">` block containing the "Paso 2 de 2" indicator.

## Architectural Reasoning
These changes are purely visual and do not affect the functionality of the booking flow. By removing these texts, we create a more streamlined experience, especially for users who are already familiar with the flow or are accessing it through a tour-specific landing page where the context is already established.
