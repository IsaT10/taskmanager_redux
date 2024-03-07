import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      status: 'pending',
      title: 'Remove Button',
      description:
        'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
      date: '2023-08-28',
      assignedTo: 'Ishat',
      priority: 'high',
    },
  ],

  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: 'pending', ...action.payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: 'pending',
          ...action.payload,
        });
      }
    },

    removeTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },

    updateTask(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      task.status = action.payload.status;
    },

    userTasks(state, action) {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignedTo === action.payload
      );
    },
  },
});

export const { addTask, removeTask, updateTask, userTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
