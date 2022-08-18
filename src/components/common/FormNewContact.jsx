import { useDispatch, useSelector } from 'react-redux';
import { addToContactsList } from '../../store/history-action';
import {ReactComponent as IconPhoto} from '../../image/photo-icon.svg';
import {ReactComponent as IconRename} from '../../image/rename-icon.svg';
import s from './FormNewContact.module.scss';

const FormNewContact = ({onToggleModal, successNotify, errorNotify}) => {
  const persons = useSelector(state => Object.values(state));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const image = e.currentTarget.image.value;

    const includesTest = persons.find((person) => person.name?.toLowerCase() === name.toLowerCase())

    if(includesTest) {
      errorNotify();
      return
    }

    dispatch(addToContactsList(name, image))
    onToggleModal();
    successNotify();
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2>Create contact</h2>
      <label className={s.inputLabel}>
        <IconRename className={s.inputIconRename} width="30"/>
        <input className={s.modalInput} type="text" placeholder="Name" name="name" autoComplete='off'/>
      </label>
      <label className={s.inputLabel}>
        <IconPhoto className={s.inputIconPhoto} width="25"/>
        <input className={s.modalInput} type="text" placeholder="Photo link" name="image" autoComplete='off'/>
      </label>
        <button type="submit" className={s.modalBtn}>
          Add
        </button>
    </form>
  );
};

export default FormNewContact;
