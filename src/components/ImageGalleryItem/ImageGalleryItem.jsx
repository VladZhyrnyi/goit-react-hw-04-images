import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isOpenModal: false };

  showModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { source, alt, largeImg } = this.props;

    return (
      <>
        <Image src={source} alt={alt} onClick={this.showModal} />
        {this.state.isOpenModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt={alt} width="800"/>
          </Modal>
        )}
      </>
    );
  }
}
