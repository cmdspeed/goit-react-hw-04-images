import React, { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [page, setPage] = useState(1);
  const [modal, showModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [modalUrl, setModalUrl] = useState('');
  const [tags, setTags] = useState('');

  const getSearchQuery = inputValue => {
    setInputValue(inputValue);
  };

  const showNextPage = () => {
    setPage(page + 1);
  };

  const modalPhoto = modalUrl => {
    setModalUrl(modalUrl);
    toggleModal();
  };

  const toggleModal = () => {
    showModal(!modal);
  };

  const getTags = tags => {
    setTags(tags);
  };

  return (
    <>
      <Searchbar getSearchQuery={getSearchQuery} />
      <ImageGallery
        inputValue={inputValue}
        page={page}
        showNextPage={showNextPage}
        modalUrl={modalPhoto}
        getTags={getTags}
      />
      {modal && <Modal url={modalUrl} toggleModal={toggleModal} tags={tags} />}
    </>
  );
};
