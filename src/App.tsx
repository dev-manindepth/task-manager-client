import { Toaster } from 'react-hot-toast';
import './App.scss';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useEffect } from 'react';
import { clearNotification } from './redux/reducers/notification.reducer';

function App() {
  const dispatch = useDispatch();
  const notificationMessage = useSelector(
    (state: RootState) => state.notification.message
  );

  useEffect(() => {
    if (notificationMessage) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notificationMessage, dispatch]);
  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App;
