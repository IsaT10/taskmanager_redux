import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './feature/tasks/tasksSlice';
import userSlice from './feature/User/userSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    users: userSlice,
  },
});
