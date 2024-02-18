import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../interfaces';
import {
  createNewTask,
  deleteExistingTask,
  getTaskList,
  updateExistingTask,
} from '../api/task';

interface ITaskState {
  taskList: ITask[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ITaskState = {
  taskList: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<ITask>) => {
      state.taskList = [action.payload, ...state.taskList];
    },
    updateTask: (state, action: PayloadAction<Partial<ITask>>) => {
      const { id, completed } = action.payload;
      state.taskList = state.taskList?.map((task) => {
        if (task.id === id) {
          task.completed = completed!;
        }
        return task;
      });
    },
    deleteTask: (state, action: PayloadAction<Partial<ITask>>) => {
      const { id } = action.payload;
      state.taskList = state.taskList?.filter((task) => task.id !== id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTaskList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTaskList.fulfilled, (state, action) => {
        const data: ITask[] = action.payload.data;
        state.taskList = data.sort((a, b) => b.id - a.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTaskList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(createNewTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewTask.fulfilled, (state, action) => {
        state.taskList = [action.payload.data, ...state.taskList];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createNewTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateExistingTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateExistingTask.fulfilled, (state, action) => {
        const { id, completed } = action.payload.data;
        state.taskList = state.taskList?.map((task) => {
          if (task.id === id) {
            task.completed = completed!;
          }
          return task;
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateExistingTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteExistingTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteExistingTask.fulfilled, (state, action) => {
        const id = action.payload?.id;
        state.taskList = state.taskList?.filter(
          (task) => task.id !== Number(id)
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteExistingTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export default taskSlice.reducer;
export const { createTask, deleteTask, updateTask } = taskSlice.actions;
