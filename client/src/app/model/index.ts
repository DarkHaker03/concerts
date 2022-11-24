import { createSlice } from '@reduxjs/toolkit';

interface State {
  a: number;
}

const initialState: State = { a: 0 };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
