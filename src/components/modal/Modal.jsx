import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modalRoot');

function Modal({onToggleModal, children}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onToggleModal()
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal()
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        {children}
      </div>
    </div>, modalRoot,
  );
}

export default Modal;
