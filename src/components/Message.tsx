let count = 0;

const Message = () => {
  console.log('Messaged called', count)
  count++;
  return <div>Message {count}</div>;
};

export default Message;
