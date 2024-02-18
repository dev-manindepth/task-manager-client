import TaskSkeleton from '../TaskSkeleton';

const TaskListSkeleton = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <TaskSkeleton key={index} />
      ))}
    </div>
  );
};

export default TaskListSkeleton;
