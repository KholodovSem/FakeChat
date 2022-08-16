import s from './MessengerMenu.module.scss';
import MenuHeader from './MenuHeader';

const MessengerMenu = () => {
  return (
    <aside className={s.messengerMenu}>
      <MenuHeader />
    </aside>
  );
};

export default MessengerMenu;
