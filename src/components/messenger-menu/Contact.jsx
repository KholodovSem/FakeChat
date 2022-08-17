import s from './Contact.module.scss';
import {NavLink} from 'react-router-dom';

const Contact = ({src, name, textMessage, date, id}) => {
  return (
    <NavLink to={`${id}`} className={s.contactBox}>
      <img src={src} className={s.personPhoto}/>
      <div className={s.nameMessageWrapper}>
      <span className={s.name}>{name}</span>
      <span className={s.message}>{textMessage}</span>
      </div>
      <span className={s.date}>{date}</span>
    </NavLink>
  );
};

export default Contact;
