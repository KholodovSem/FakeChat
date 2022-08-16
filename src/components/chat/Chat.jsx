import { useState } from 'react';
import Message from './Message';
import { GetJokeFromChuckNorris } from '../helpers/GetRandomJoke';
import { randomDelay } from '../helpers/GetRandomDelay';
import history from '../../data/chats.json';
import s from './Chat.module.scss';
import SendMessageForm from './SendMessageForm';
import ChatHeader from './ChatHeader';

const Chat = () => {
  const [messageHistory, setMessageHistory] = useState(history[0]);
  const { messages } = messageHistory;

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date().toLocaleTimeString('en-US');
    const date = new Date().toLocaleDateString('en-US');
    const textMessage = e.currentTarget.elements.message.value;
    e.currentTarget.elements.message.value = '';

    setMessageHistory((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, {
        myMessage: true,
        textMessage,
        date,
        time,
      }],
    }));

    setTimeout(() => GetJokeFromChuckNorris().then(({ data: { value } }) => setMessageHistory(prevState => ({
      ...prevState,
      messages: [...prevState.messages, {
        myMessage: false,
        textMessage: value,
        date: new Date().toLocaleDateString('en-US'),
        time: new Date().toLocaleTimeString('en-US'),
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
            key={message.time}
          />),
        )}
        <SendMessageForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Chat;
