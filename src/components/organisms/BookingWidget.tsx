import * as React from "react"
import { BookingForm } from "./BookingForm"
import { BookingCalendar } from "./BookingCalendar"

export function BookingWidget() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto items-stretch justify-center p-4 lg:p-8">
      <div className="w-full lg:w-1/2">
        <BookingForm />
      </div>
      <div className="w-full lg:w-1/2">
        <BookingCalendar />
      </div>
    </div>
  )
}
