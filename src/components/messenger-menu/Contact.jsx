import s from './Contact.module.scss';

const Contact = ({src, name, textMessage, date, id, handleClick}) => {
  return (
    <div className={s.contactBox} onClick={() => handleClick(id)}>
      <img src={src} alt={name} className={s.personPhoto}/>
      <div className={s.nameMessageWrapper}>
      <span className={s.name}>{name}</span>
      <span className={s.message}>{textMessage}</span>
      </div>
      <span className={s.date}>{date}</span>
    </div>
  );
};

export default Contact;
