import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/task.reducer';
import notificationReducer from './reducers/notification.reducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: {
    task: taskReducer,
    notification: notificationReducer,
  },
});
export default store;
