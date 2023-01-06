import './Message.css';

const Message = ({ item }) => {
  const { user, date, text } = item;

  // const hours = date.getHours();
  // const minutes =
  //   date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  return (
    <div className='message'>
      <p className='message__user'>{user}:</p>
      <p className='message__text'>{text}</p>
      {/* <p className='message__time'>{hours}:{minutes}</p> */}
    </div>
  );
};

export default Message;
