import { useState } from 'react';
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

const Chat = () => {
  const [messageHistory, setMessageHistory] = useState(history[0]);
  const { messages } = messageHistory;

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

  return (
    <div className={s.chat}>
      <ChatHeader src={history[0].image} name={history[0].name} />
      <div className={s.chatHistory}>
        {messages.map(message =>
          (<Message
            {...message}
            src={history[0].image}
            name={history[0].name}
            key={message.id}
          />),
        )}
      </div>
      <SendMessageForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
