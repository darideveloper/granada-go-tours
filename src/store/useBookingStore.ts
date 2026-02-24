import { create } from 'zustand';

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

  // Actions
  setSelectedDate: (date: Date | undefined) => void;
  updateFormData: (data: Partial<BookingState['formData']>) => void;
  resetBooking: () => void;
}

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

  // Actions
  setSelectedDate: (date) => set({ selectedDate: date }),
  
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  
  resetBooking: () => set({
    selectedDate: undefined,
    formData: {
      fullName: '',
      email: '',
      tourId: null,
      guests: 1,
      specialRequests: '',
    },
  }),
}));
