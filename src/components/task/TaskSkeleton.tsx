const TaskSkeleton = () => {
  return (
    <div className="task-skeleton">
      <div className="task-skeleton-header">
        <div className="task-skeleton-header-action">
          <span>
            <div className="task-skeleton-delete-btn"></div>
          </span>
        </div>
      </div>
      <div className="task-skeleton-body">
        <div className="task-skeleton-body-list-item">
          <div className="task-skeleton-body-list-item-title"></div>
          <div className="task-skeleton-body-list-item-description"></div>
          <div className="task-skeleton-body-list-item-status"></div>
        </div>
      </div>

      <div className="task-skeleton-footer"></div>
    </div>
  );
};

export default TaskSkeleton;
