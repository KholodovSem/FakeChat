import { useState } from 'react';
import Message from './Message';
import { GetJokeFromChuckNorris } from '../helpers/GetRandomJoke';
import history from '../../data/history.json';
import { randomDelay } from '../helpers/GetRandomDelay';

const Chat = () => {
  const [newMessage, setNewMessage] = useState([]);
  const [newAnswer, setNewAnswer] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date().toLocaleTimeString('en-US');
    const date = new Date().toLocaleDateString('en-US');
    const textMessage = e.currentTarget.elements.message.value;

    setNewMessage((prevState) => ([...prevState, {
      textMessage,
      date,
      time,
    }]));

    setTimeout(() => GetJokeFromChuckNorris().then(({data: {value}}) => setNewAnswer(prevState => ([...prevState,{
      textMessage: value,
      date: new Date().toLocaleDateString('en-US'),
      time: new Date().toLocaleTimeString('en-US'),
    }]))), randomDelay(10000, 15000))
  };

  const filter = (id) => {
    return history.filter((person) => person.id === id)[0];
  };

  filter();

  return (
    <div>
      <ul>
        {filter(2).messages.map(message =>
          (<Message message={message.textMessage} date={message.date} time={message.time} key={message.time}/>),
        )}
        {newAnswer.length > 0 &&
          newAnswer.map(message => (
            <Message message={message.textMessage} time={message.time} date={message.date} key={message.time}/>
          ))
        }
      </ul>
      <ul>
        {filter(1).messages.map(message =>
          (<Message message={message.textMessage} date={message.date} time={message.time} key={message.time}/>),
        )}
        {newMessage.length > 0 &&
          newMessage.map(message => (
            <Message message={message.textMessage} time={message.time} date={message.date} key={message.time}/>
          ))
          }
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="message"/>
        <button type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
