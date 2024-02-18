import { ICreateTaskPayload } from '../../../interfaces';
import axios from '../../axios';

class TaskService {
  public async getTaskList() {
    const response = await axios.get('/task');
    return response.data;
  }
  public async createTask(payload: ICreateTaskPayload) {
    const response = await axios.post('/task', payload);
    return response.data;
  }
  public async updateTask(id: number, completed: boolean) {
    const response = await axios.patch(`/task/${id}`, { completed });
    return response.data;
  }
  public async deleteTask(id: number) {
    const response = await axios.delete(`/task/${id}`);
    return response.data;
  }
}

export const taskService: TaskService = new TaskService();
