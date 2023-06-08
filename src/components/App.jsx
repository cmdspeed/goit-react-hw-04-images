import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    page: 1,
    showModal: false,
  };

  getSearchQuery = inputValue => {
    this.setState({
      inputValue,
    });
  };

  showNextPage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  modalPhoto = modalUrl => {
    this.setState({
      modalUrl,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getTags = tags => {
    this.setState({
      tags,
    });
  };

  render() {
    const { inputValue, page, modalUrl, showModal, tags } = this.state;
    return (
      <>
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGallery
          inputValue={inputValue}
          page={page}
          showNextPage={this.showNextPage}
          modalUrl={this.modalPhoto}
          getTags={this.getTags}
        />
        {showModal && (
          <Modal url={modalUrl} toggleModal={this.toggleModal} tags={tags} />
        )}
      </>
    );
  }
}
