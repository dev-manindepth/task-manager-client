import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskService } from '../../services/api/task/task.service';
import { ICreateTaskPayload, IUpdatePayload } from '../../interfaces';
import { addNotification } from '../reducers/notification.reducer';

export const getTaskList = createAsyncThunk(
  'task/getTaskList',
  async (_, { dispatch }) => {
    try {
      const response = await taskService.getTaskList();
      return response;
    } catch (error: any) {
      dispatch(error.message);
    }
  }
);

export const createNewTask = createAsyncThunk(
  'task/createNewTask',
  async (payload: ICreateTaskPayload, { dispatch }) => {
    try {
      const response = await taskService.createTask(payload);
      dispatch(addNotification(response.data.message));
      return response;
    } catch (error: any) {
      dispatch(addNotification(error.response.data.message));
    }
  }
);

export const updateExistingTask = createAsyncThunk(
  'task/updateExistingTask',
  async (payload: IUpdatePayload, { dispatch }) => {
    try {
      const response = await taskService.updateTask(
        payload.id,
        payload.completed
      );
      dispatch(addNotification(response.data.message));
      return response;
    } catch (error: any) {
      dispatch(addNotification(error.response.data.message));
    }
  }
);

export const deleteExistingTask = createAsyncThunk(
  'task/deleteExistingTask',
  async (id: number, { dispatch }) => {
    try {
      const response = await taskService.deleteTask(id);
      dispatch(addNotification(response.data.message));
      return { id, message: response.message };
    } catch (error: any) {
      dispatch(addNotification(error.response.data.message));
    }
  }
);
