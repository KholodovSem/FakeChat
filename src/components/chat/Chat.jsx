import Message from './Message';
import { GetJokeFromChuckNorris } from '../helpers/GetRandomJoke';
import { randomDelay } from '../helpers/GetRandomDelay';
import s from './Chat.module.scss';
import SendMessageForm from './SendMessageForm';
import ChatHeader from './ChatHeader';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addToChatHistory } from '../../store/history-action';
import { options } from '../helpers/GetDate';

const Chat = ({ id }) => {
  const messageHistory = useSelector(state => state[id]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const textMessage = e.currentTarget.elements.message.value;
    e.currentTarget.elements.message.value = '';


    dispatch(addToChatHistory(id, {
      id: nanoid(),
      myMessage: true,
      textMessage,
      date: new Date().toLocaleString("en-US", options),
      time: new Date().toLocaleTimeString(),
    }))

    setTimeout(() => GetJokeFromChuckNorris().then(({ data: { value } }) =>
      dispatch(addToChatHistory(id, {
        id: nanoid(),
        myMessage: false,
        textMessage: value,
        date: new Date().toLocaleString("en-US", options),
        time: new Date().toLocaleTimeString(),
      }))
    ), randomDelay(10000, 15000));
  };

  if(messageHistory === undefined){
    return (
      <div className={s.chat}>
        <ChatHeader />
        <div className={s.chatHistory}>
          <h1 className={s.title}>Choose person</h1>
        </div>
      </div>
    )
  }

  return (
    <div className={s.chat}>
      <ChatHeader src={messageHistory.image} name={messageHistory.name} />
      <div className={s.chatHistory}>
        {messageHistory.messages.map(message =>
          (<Message
            {...message}
            src={messageHistory.image}
            name={messageHistory.name}
            key={message.id}
          />),
        )}
      </div>
      <SendMessageForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
