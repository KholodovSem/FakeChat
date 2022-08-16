import {Routes} from 'react-router-dom';
import {Chat, MessengerMenu} from './components/index';
import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.Messenger}>
      <MessengerMenu />
      <Chat />
    </div>
  );
};

