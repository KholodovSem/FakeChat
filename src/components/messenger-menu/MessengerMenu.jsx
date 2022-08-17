import { useSelector } from 'react-redux';
import MenuHeader from './MenuHeader';
import Contact from './Contact';

import s from './MessengerMenu.module.scss';
import { SliceMessage } from '../helpers/SliceMessage';

const MessengerMenu = ({handleClick}) => {
  const persons = useSelector(state => state)

  return (
    <aside className={s.messengerMenu}>
      <MenuHeader />
      <div className={s.contactsWrapper}>
        {persons.map((person) => (
          <Contact
            src={person.image ? person.image : null}
            name={person.name ? person.name : null}
            key={person.id}
            date={person.messages.length > 0 ? person.messages[person.messages.length - 1].date : null}
            textMessage={person.messages.length > 0 ? SliceMessage(person.messages[person.messages.length - 1].textMessage) : null}
            id={person.id}
            handleClick={handleClick}
          />
        ))}
      </div>
    </aside>
  );
};

export default MessengerMenu;
