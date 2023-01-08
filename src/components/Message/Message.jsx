import './Message.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Message = ({ item }) => {
  const { user, date, text } = item;
  const currentUser = React.useContext(CurrentUserContext);

  const clazz =
    currentUser.name === user ? 'message' : 'message message_another';

  const messageDate = new Date(date);
  const hours = messageDate.getHours();
  const minutes =
    messageDate.getMinutes() < 10
      ? '0' + messageDate.getMinutes()
      : messageDate.getMinutes();

  return (
    <div className="message__wrapper">
      <div className={clazz}>
        <p className="message__user">{user}:</p>
        <p className="message__text">{text}</p>
        <p className="message__time">
          {hours}:{minutes}
        </p>
      </div>
    </div>
  );
};

export default Message;
