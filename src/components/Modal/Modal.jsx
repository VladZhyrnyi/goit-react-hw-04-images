import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

export const Modal = ({children, onClose}) => {
  useEffect(() => {
    const handleEscButton = event => {
      if (event.code === `Escape`) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscButton);

    return () => {
      window.removeEventListener('keydown', handleEscButton);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};
