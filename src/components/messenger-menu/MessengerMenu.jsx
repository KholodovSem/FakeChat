import s from './MessengerMenu.module.scss';
import MenuHeader from './MenuHeader';
import Contact from './Contact';
import history from '../../data/chats.json';

const MessengerMenu = () => {
  return (
    <aside className={s.messengerMenu}>
      <MenuHeader />
      <div className={s.contactsWrapper}>
        {history.map((person) => (
          <Contact
            src={person.image ? person.image : null}
            name={person.name ? person.name : null}
            key={person.id}
            date={person.messages.length > 0 ? person.messages[person.messages.length - 1].date : null}
            textMessage={person.messages.length > 0 ? person.messages[person.messages.length - 1].textMessage : null}
            id={person.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default MessengerMenu;
