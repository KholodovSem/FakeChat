import s from './MenuHeader.module.scss';
import { ReactComponent as UserIcon } from '../../image/user.svg';
import { ReactComponent as LoupIcon } from '../../image/loupe.svg';

const MenuHeader = () => {
  return (
    <div className={s.menuHeader}>
      <UserIcon className={s.menuUserIcon} />
      <label className={s.inputLabel}>
        <LoupIcon className={s.menuLoupIcon} />
        <input
          className={s.menuInput}
          placeholder='Search or start new chat'
        />
      </label>
    </div>
  );
};

export default MenuHeader;
