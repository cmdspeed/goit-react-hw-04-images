import { Component } from 'react';

import CSS from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  closeModalOnClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    const { url, tags } = this.props;
    return (
      <div className={CSS.overlay} onClick={this.closeModalOnClick}>
        <div className={CSS.modal}>
          <img src={url} alt={tags} />
        </div>
      </div>
    );
  }
}
