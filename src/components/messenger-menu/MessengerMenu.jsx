import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MenuHeader, Contact, Modal, FormNewContact } from '../index';
import { SliceMessage, formatDate } from '../helpers/index';
import { ReactComponent as AddIcon } from '../../image/Add icon.svg';
import s from './MessengerMenu.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const MessengerMenu = ({ handleClick }) => {
  const persons = useSelector(state => state.chatHistory);

  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const sortByDateAndTime = () => {
    const copyState = [...persons];

    return copyState.sort((a,b) => new Date(b?.messages[b?.messages?.length -1]?.date + ' ' + b?.messages[b?.messages?.length -1]?.time) - new Date(a?.messages[a?.messages?.length -1]?.date + ' ' + a?.messages[a?.messages?.length -1]?.time)
    )
  }

  const searchPerson = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return sortByDateAndTime().filter(({ name }) => name?.toLowerCase().includes(normalizeFilter));
  };

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  const successNotify = () => {
    toast.success(`Contact successfully added`);
  };

  const errorNotify = () => {
    toast.error(`Such contact already exists`);
  };

  return (
    <aside className={s.messengerMenu}>
      <MenuHeader filter={filter} setFilter={setFilter} />
      <div className={s.contactsWrapper}>
        {searchPerson().length > 0 ? searchPerson().map((person) => (
            <Contact
              src={person.image ? person.image : null}
              name={person.name ? person.name : null}
              key={person.id}
              date={person.messages?.length > 0 ? formatDate(person.messages[person.messages.length - 1].date) : null}
              textMessage={person.messages?.length > 0 ? SliceMessage(person.messages[person.messages.length - 1].textMessage) : null}
              id={person.id}
              handleClick={handleClick}
            />
          ))
          :
          <button className={s.addBtn} onClick={onToggleModal}>
            <AddIcon className={s.addIcon} />
            Add new contact
          </button>}
      </div>
      {showModal ?
        <Modal onToggleModal={onToggleModal}>
          <FormNewContact onToggleModal={onToggleModal} successNotify={successNotify} errorNotify={errorNotify}/>
        </Modal>
        : null}
      <ToastContainer />
    </aside>
  );
};

export default MessengerMenu;
