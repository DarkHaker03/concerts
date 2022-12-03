import { createSlice } from '@reduxjs/toolkit';

interface State {
  isNotificationPopup: boolean;
}

const initialState: State = { isNotificationPopup: false };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggle(state) {
      state.isNotificationPopup = !state.isNotificationPopup;
    },
  },
});

export default appSlice.reducer;
