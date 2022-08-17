import {Chat, MessengerMenu} from './components/index';
import s from './App.module.scss';
import { useState } from 'react';

export const App = () => {
  const [userId, setUserId] = useState(null)

  const handleClick = (id) => {
    setUserId(id)
  }

  return (
    <div className={s.Messenger}>
      <MessengerMenu handleClick={handleClick}/>
      <Chat id={userId}/>
    </div>
  );
};
