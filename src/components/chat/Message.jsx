import s from './Messege.module.scss';

const Message = ({ textMessage, date, time, src, name, myMessage }) => {
  return (
    <div className={myMessage ? s.myMessage : null}>
      <div className={myMessage ? null : s.messageWrapper}>
        {myMessage ? false : <img src={src} alt={name} className={s.userPhoto} />}
        <p className={myMessage ? s.textSecondColor : s.text}>
          {textMessage}
        </p>
      </div>
      <span>{`${date}, ${time}`}</span>
    </div>
  );
};

export default Message;
