import s from './ChatHeader.module.scss';

const ChatHeader = ({src, name}) => {
  return (
    <div className={s.chatHeader}>
      <img src={src} alt={name} className={s.userPhoto}/>
      <span className={s.name}>{name}</span>
    </div>
  );
};

export default ChatHeader;
