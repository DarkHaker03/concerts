import { createSlice } from '@reduxjs/toolkit';

interface State {
  isPopup: boolean;
}

const initialState: State = { isPopup: false };

export const buyTicketSlice = createSlice({
  name: 'buyTicket',
  initialState,
  reducers: {
    toggle(state) {
      state.isPopup = !state.isPopup;
    },
  },
});

export default buyTicketSlice.reducer;
