# Availability Data Mapping Design

## Data Translation Strategy

The high-level table provided by the user will be mapped to the `dates` object within `src/data/tours.json`.

### Date Ranges for March/April 2026

- **March 2026:**
  - **Standard Mon-Fri:** 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27.
  - **Weekends:** 7, 8, 14, 15, 21, 22, 28.
  - **Semana Santa (Mar):** 29, 30, 31.
- **April 2026:**
  - **Easter Week (Semana Santa):** 1, 2, 3, 4, 5.
  - **Weekends:** 11, 12, 18, 19, 25, 26.
  - **Standard Mon-Fri (Rest):** 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30.

### Mapping Rule

- `Available` status will be mapped to the `available` array.
- `Limited` status will be mapped to the `limited` array.
- A small selection of dates during high-demand periods (e.g., Maundy Thursday Apr 2nd and Good Friday Apr 3rd) will be marked as `booked` for most tours to provide realism.

### Tour-Specific Mapping Table

| Tour ID | Mar Mon-Fri | Mar Weekends | Mar SS | Apr Easter | Apr Weekends | Apr Mon-Fri |
| --- | --- | --- | --- | --- | --- | --- |
| alhambra-completa | Avail | Limited | Limited | Limited | Limited | Avail |
| alhambra-sin-tickets | Avail | Avail | Limited | Limited | Avail | Avail |
| palacios-nazaries | Limited | Limited | Limited | Limited | Limited | Limited |
| catedral-granada | Avail | Limited | Avail | Limited | Avail | Avail |
| capilla-real | Avail | Avail | Limited | Limited | Limited | Avail |
| monasterio-san-jeronimo | Avail | Avail | Avail | Avail | Avail | Avail |
| monasterio-cartuja | Avail | Avail | Avail | Avail | Avail | Avail |
| ruta-fray-leopoldo | Avail | Limited | Limited | Limited | Limited | Avail |
| ruta-gran-capitan | Avail | Avail | Avail | Avail | Avail | Avail |
| ruta-san-juan-de-dios | Avail | Avail | Avail | Avail | Avail | Avail |
| basilica-san-juan-de-dios | Avail | Limited | Limited | Limited | Avail | Avail |
| albaicin-misterios | Avail | Limited | Limited | Limited | Limited | Avail |
| sacromonte | Avail | Avail | Limited | Limited | Avail | Avail |
| centro-ciudad | Avail | Avail | Avail | Limited | Avail | Avail |

## Verification Plan

- After the update, the `src/data/tours.json` file will be validated for JSON syntax.
- The `BookingCalendar.tsx` component should correctly display these dates (can be verified visually or through component testing if available).
- Ensure no duplicate dates exist across `available`, `limited`, and `booked` arrays for a single tour.
