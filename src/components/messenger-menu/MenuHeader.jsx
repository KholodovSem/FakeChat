import s from './MenuHeader.module.scss';
import { Modal } from '../index';
import { useState } from 'react';
import { ReactComponent as LoupIcon } from '../../image/loupe.svg';
import { ReactComponent as CloseIcon } from '../../image/close-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../store/user-action';

const MenuHeader = ({ filter, setFilter }) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const onToggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const clearFilter = () => {
    setFilter('');
  };

  return (
    <div className={s.menuHeader}>
      <button className={s.menuUserBtn} onClick={onToggleModal}>
        <img src={user.photo} alt='User photo' className={s.menuUserIcon} />
      </button>
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
      {modal ?
        <Modal onToggleModal={onToggleModal}>
          <div className={s.profileCard}>
            <img src={user.photo} alt="User image" className={s.profileImage}/>
            <span className={s.firstSpan}><span className={s.secondSpan}>Email:</span> {user.email}</span>
            {user.displayName !== ''? <span className={s.firstSpan}><span className={s.secondSpan}>Name:</span> {user.displayName}</span> : null}
            <button onClick={() => {
              onToggleModal();
              dispatch(removeUser());
            }
            }>Logout
            </button>
          </div>
        </Modal>
        : null}
    </div>
  );
};

export default MenuHeader;
