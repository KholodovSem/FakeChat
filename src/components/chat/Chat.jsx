import { useEffect, useState } from 'react';
import Message from './Message';
import { GetJokeFromChuckNorris } from '../helpers/GetRandomJoke';
import { randomDelay } from '../helpers/GetRandomDelay';
import history from '../../data/chats.json';
import s from './Chat.module.scss';
import SendMessageForm from './SendMessageForm';
import ChatHeader from './ChatHeader';
import { getDate } from '../helpers/GetDate';
import { getTime } from '../helpers/GetTime';
import { nanoid } from 'nanoid';

const Chat = ({ id }) => {
  const [messageHistory, setMessageHistory] = useState(null);
  // const { messages } = messageHistory;

  useEffect(() => {
    setMessageHistory(history[id]);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const textMessage = e.currentTarget.elements.message.value;
    e.currentTarget.elements.message.value = '';

    setMessageHistory((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, {
        id: nanoid(),
        myMessage: true,
        textMessage,
        date: getDate(),
        time: getTime(),
      }],
    }));

    setTimeout(() => GetJokeFromChuckNorris().then(({ data: { value } }) => setMessageHistory(prevState => ({
      ...prevState,
      messages: [...prevState.messages, {
        id: nanoid(),
        myMessage: false,
        textMessage: value,
        date: getDate(),
        time: getTime(),
      }],
    }))), randomDelay(10000, 15000));
  };

  if(messageHistory === null || messageHistory === undefined){
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
