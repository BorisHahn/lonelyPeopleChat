import './Message.css';

const Message = ({ item }) => {
  const { user, date, text } = item;

  const messageDate = new Date(date);
  const hours = messageDate.getHours();
  const minutes =
    messageDate.getMinutes() < 10
      ? '0' + messageDate.getMinutes()
      : messageDate.getMinutes();

  return (
    <div className="message">
      <p className="message__user">{user}:</p>
      <p className="message__text">{text}</p>
      <p className="message__time">
        {hours}:{minutes}
      </p>
    </div>
  );
};

export default Message;
