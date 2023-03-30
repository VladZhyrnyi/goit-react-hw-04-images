import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscButton)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscButton)
  }

  handleEscButton = (event) => {
    if (event.code === `Escape`) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <Overlay onClick={this.props.onClose}>
        <ModalWindow>
          {this.props.children}
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
