import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.scss';
import { useMatch } from 'react-router-dom';

const modalRoot = document.querySelector('#modalRoot');

function Modal({onToggleModal, children}) {
  const match = useMatch("/login");

  useEffect(() => {
    if(match?.pathname === "/login"){
      return
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if(match?.pathname === "/login"){
      return
    }

    if (e.code === 'Escape') {
      onToggleModal()
    }
  };

  const handleBackdropClick = e => {
    if(match?.pathname === "/login"){
      return
    }

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
