import s from './SendMessageForm.module.scss';

const SendMessageForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={s.sendMessageForm}>
      <input name='message' />
      <button type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessageForm;
