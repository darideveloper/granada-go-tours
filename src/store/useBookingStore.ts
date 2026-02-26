import { create } from 'zustand';
import toursData from "@/data/tours.json";

interface Availability {
  available: Date[];
  limited: Date[];
  booked: Date[];
}

interface BookingState {
  // Current selection
  selectedDate: Date | undefined;
  
  // Future-proofing for form data
  formData: {
    fullName: string;
    email: string;
    tourId: string | null;
    guests: number;
    specialRequests: string;
  };

  // Availability for the current tour
  availability: Availability;

  // Actions
  setSelectedDate: (date: Date | undefined) => void;
  updateFormData: (data: Partial<BookingState['formData']>) => void;
  resetBooking: () => void;
}

const getInitialAvailability = (tourId: string | null): Availability => {
  const tour = toursData.find(t => t.id === tourId);
  if (!tour || !tour.dates) {
    return { available: [], limited: [], booked: [] };
  }
  
  return {
    available: tour.dates.available.map(d => new Date(d)),
    limited: tour.dates.limited.map(d => new Date(d)),
    booked: tour.dates.booked.map(d => new Date(d)),
  };
};

export const useBookingStore = create<BookingState>((set) => ({
  // Initial selection
  selectedDate: undefined,
  
  // Initial form data
  formData: {
    fullName: '',
    email: '',
    tourId: null,
    guests: 1,
    specialRequests: '',
  },

  availability: { available: [], limited: [], booked: [] },

  // Actions
  setSelectedDate: (date) => set({ selectedDate: date }),
  
  updateFormData: (data) => set((state) => {
    const newFormData = { ...state.formData, ...data };
    
    // If tourId changed, update availability
    let newAvailability = state.availability;
    if (data.tourId !== undefined) {
      newAvailability = getInitialAvailability(newFormData.tourId);
    }
    
    return { 
      formData: newFormData,
      availability: newAvailability,
      // Reset selected date if it's no longer valid for the new tour (optional)
      // selectedDate: data.tourId !== undefined ? undefined : state.selectedDate
    };
  }),
  
  resetBooking: () => set({
    selectedDate: undefined,
    formData: {
      fullName: '',
      email: '',
      tourId: null,
      guests: 1,
      specialRequests: '',
    },
    availability: { available: [], limited: [], booked: [] },
  }),
}));
