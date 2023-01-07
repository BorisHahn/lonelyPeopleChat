import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Message from '../Message/Message';
import './Main.css';

const Main = ({ handleAddMessages, messages }) => {
  const [message, setMessage] = useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const { name } = currentUser;

  const addMessage = (e) => {
    e.preventDefault();
    handleAddMessages(message);
    setMessage('');
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const messageList = messages.map((item, index) => {
    return <Message key={index} item={item} />;
  });

  return (
    <div className="chat">
      <div className="chat__menu">
        <p>Hello, {name}</p>
        <Link>Exit from chat</Link>
      </div>
      <div className='chat__wrapper'>
        <div className="chat__list">{messageList}</div>
      </div>
      <form className="chat__form" onSubmit={addMessage}>
        <input
          className="chat__input"
          value={message}
          placeholder="Write a message..."
          onChange={onChange}
          required
        ></input>
        <button className="chat__button">Send</button>
      </form>
    </div>
  );
};

export default Main;
