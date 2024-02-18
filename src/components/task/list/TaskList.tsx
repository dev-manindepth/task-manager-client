import { useSelector } from 'react-redux';
import Task from '../Task';
import { RootState } from '../../../redux/store';
import TaskSkeleton from '../TaskSkeleton';
import './TaskList.scss';

const TaskList = () => {
  const { error, isLoading, taskList } = useSelector(
    (state: RootState) => state.task
  );
  return (
    <div className="task-container">
      {isLoading && taskList.length == 0 && !error ? (
        <TaskSkeleton />
      ) : (
        <Task taskList={taskList} />
      )}
      {!isLoading && error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
    </div>
  );
};

export default TaskList;
