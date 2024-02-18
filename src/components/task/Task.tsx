import './Task.scss';
import { TiDelete } from 'react-icons/ti';
import { ITask } from '../../interfaces';
import { FaCheckCircle } from 'react-icons/fa';
import { MdDoNotDisturbOnTotalSilence } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteExistingTask, updateExistingTask } from '../../redux/api/task';

interface ITaskProp {
  taskList: ITask[];
}
const Task: React.FC<ITaskProp> = ({ taskList }) => {
  const dispatch = useDispatch();

  const deleteTask = (id: number) => {
    dispatch(deleteExistingTask(id) as any);
  };
  const updateTask = (id: number, completed: boolean) => {
    dispatch(updateExistingTask({ id, completed }) as any);
  };
  return (
    <>
      {taskList.map((task) => (
        <div className="task" key={task.id}>
          <div className="task-header">
            <div className="task-header-action">
              <div
                className="tooltip"
                onClick={() => updateTask(task.id, !task.completed)}
              >
                <span className="tooltiptext">
                  Marks as {task.completed ? 'Not Completed' : 'Competed'}
                </span>
                {task.completed ? (
                  <MdDoNotDisturbOnTotalSilence
                    style={{ fontSize: '1.5rem' }}
                  />
                ) : (
                  <FaCheckCircle color="green" style={{ fontSize: '1.3rem' }} />
                )}
              </div>
              <div
                className="tooltip delete"
                onClick={() => deleteTask(task.id)}
              >
                <span className="tooltiptext">Delete Task</span>
                <TiDelete color="red" style={{ fontSize: '1.8rem' }} />
              </div>
            </div>
          </div>
          <div className="task-body">
            <div className="task-body-title">{task.title}</div>
            <div className="task-body-description">{task.description}</div>
          </div>

          <div className="task-footer">
            <div
              className={`task-footer-status ${
                task.completed ? 'completed' : 'not-completed'
              }`}
            >
              {task.completed ? 'Completed' : 'Not Completed'}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
