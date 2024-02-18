import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTaskList } from '../redux/api/task';
import TaskList from '../components/task/list/TaskList';
import './Home.scss';
import TaskInputForm from '../components/task/input/TaskInputForm';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskList() as any);
  });
  return (
    <div className="main">
      <TaskInputForm />
      <TaskList />
    </div>
  );
};

export default Home;
