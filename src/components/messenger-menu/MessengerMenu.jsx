import s from './MessengerMenu.module.scss';
import { ReactComponent as UserIcon } from '../../image/user.svg';
import { ReactComponent as LoupIcon } from '../../image/loupe.svg';

const MessengerMenu = () => {
  return (
    <aside className={s.messengerMenu}>
      <div className={s.menuHeader}>
        <UserIcon className={s.menuUserIcon} />
        <label className={s.inputLabel}>
          <LoupIcon className={s.menuLoupIcon}/>
          <input
            className={s.menuInput}
            placeholder='Search or start new chat'
          />
        </label>
      </div>
    </aside>
  );
};

export default MessengerMenu;
