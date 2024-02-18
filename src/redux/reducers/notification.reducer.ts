import { createSlice } from '@reduxjs/toolkit';

interface INotifcation {
  message: string | null;
}
const initialState: INotifcation = {
  message: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.message = action.payload;
    },
    clearNotification: (state) => {
      state.message = null;
    },
  },
});

export default notificationSlice.reducer;
export const { addNotification, clearNotification } = notificationSlice.actions;
