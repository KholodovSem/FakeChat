import s from './MenuHeader.module.scss';
import { ReactComponent as UserIcon } from '../../image/user.svg';
import { ReactComponent as LoupIcon } from '../../image/loupe.svg';
import { ReactComponent as CloseIcon } from '../../image/close-icon.svg';

const MenuHeader = ({ filter, setFilter }) => {

  const handleChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const clearFilter = () => {
    setFilter('');
  }

  return (
    <div className={s.menuHeader}>
      <UserIcon className={s.menuUserIcon} />
      <label className={s.inputLabel}>
        <LoupIcon className={s.menuLoupIcon} />
        <input
          name='filter'
          value={filter}
          onChange={handleChange}
          className={s.menuInput}
          placeholder='Search or start new chat'
        />
        {filter.length > 0 &&
          <button className={s.closeBtn} onClick={clearFilter}>
            <CloseIcon className={s.closeIcon} />
          </button>}
      </label>
    </div>
  );
};

export default MenuHeader;
