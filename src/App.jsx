import {Routes, Route, Navigate} from 'react-router-dom';
import {Chat, MessengerMenu} from './components/index';
import s from './App.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginPage } from './components';

export const App = () => {
  const user = useSelector(state => state.user);
  const [userId, setUserId] = useState(null)

  const handleClick = (id) => {
    setUserId(id)
  }

  return (
    <Routes>
      <Route path="/FakeChat"
             element={user.userAuth?
        <div className={s.Messenger}>
        <MessengerMenu handleClick={handleClick}/>
        <Chat id={userId}/>
        </div>: <Navigate to="login"/>}
      />
      <Route path='/FakeChat/login' element={<LoginPage />} />
    </Routes>

  );
};

