const Message = ({message, date, time}) => {
  return (
    <p>
      {message}
      <span>{`${date}, ${time}`}</span>
    </p>
  );
};

export default Message;
