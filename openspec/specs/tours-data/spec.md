# tours-data Specification

## Purpose
TBD - created by archiving change add-faqs-to-tours. Update Purpose after archive.
## Requirements
### Requirement: Include FAQs in Tour Data
Every tour object in the catalog MUST provide a set of frequently asked questions to assist potential visitors.

#### Scenario: Displaying FAQs on Tour Details
- **GIVEN** a tour object from `src/data/tours.json`
- **WHEN** the tour details are rendered
- **THEN** it should have access to a `faqs` property containing an array of at least 2 question-answer pairs.

#### Scenario: Language Consistency
- **GIVEN** the project's primary language is Spanish
- **WHEN** FAQs are added to the data
- **THEN** both `question` and `answer` fields MUST be written in professional Spanish.

#### Scenario: Tour-Specific Content
- **GIVEN** a tour with a specific theme (e.g., "Religioso")
- **WHEN** FAQs are generated
- **THEN** the content MUST reflect that theme and provide relevant historical or logistical context.

### Requirement: Tour Availability Data
Every tour object in the catalog MUST provide accurate availability information for booking.

#### Scenario: Date Structure Definition
- **GIVEN** a tour object in `src/data/tours.json`
- **WHEN** the `dates` property is present
- **THEN** it MUST contain three arrays: `available`, `limited`, and `booked`.

#### Scenario: Date Format Compliance
- **GIVEN** the `dates` property
- **WHEN** populating the availability arrays
- **THEN** all entries MUST be strings in the `YYYY-MM-DD` format.

#### Scenario: Logical Date Separation
- **GIVEN** a tour's availability arrays
- **WHEN** checking for date occurrences
- **THEN** a single date MUST NOT appear in more than one of the `available`, `limited`, or `booked` arrays for that tour.

