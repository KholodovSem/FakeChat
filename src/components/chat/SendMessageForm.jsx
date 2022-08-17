import s from './SendMessageForm.module.scss';
import { ReactComponent as PaperPlane } from '../../image/paper-plane.svg';

const SendMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={s.sendMessageForm}>
      <label className={s.inputLabel}>
        <input
          name='message'
          placeholder='Type your message'
          className={s.sendMessageInput}
        />
        <button type='submit' className={s.sendMessageBtn}>
          <PaperPlane />
        </button>
      </label>
    </form>
  );
};

export default SendMessageForm;
