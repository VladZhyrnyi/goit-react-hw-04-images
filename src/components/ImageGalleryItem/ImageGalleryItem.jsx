import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({source, alt, largeImg}) => {
  const [isOpenModal, setIsOpenModal] = useState();

  return (
    <>
      <Image src={source} alt={alt} onClick={() => setIsOpenModal(true)} />
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <img src={largeImg} alt={alt} width="800" />
        </Modal>
      )}
    </>
  );
};
