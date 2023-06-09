import { useState, useEffect } from 'react';

import fetchQuery from '../API/API';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import CSS from './ImageGallery.module.css';

export const ImageGallery = ({
  modalUrl,
  getTags,
  page,
  inputValue,
  showNextPage,
}) => {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('none');
  const [errorMessage, setError] = useState('');
  const [prevValue, setPrevValue] = useState(inputValue);
  const [prevPage, setPrevPage] = useState(page);

  const loadPhoto = () => {
    fetchQuery(inputValue, page)
      .then(response => {
        setPhotos(response.hits);
        setStatus('ok');
      })
      .catch(error => setError('error ' + errorMessage));
  };

  const loadMorePhoto = () => {
    fetchQuery(inputValue, page)
      .then(response => {
        let old = photos;
        let res = response.hits;
        let newPhotos = [...old, ...res];
        setPhotos(newPhotos);
        setStatus('ok');
      })
      .catch(error => setError('error ' + errorMessage));
  };

  useEffect(() => {
    scrollWindow();

    if (prevValue !== inputValue) {
      setStatus('pending');
      setPrevValue(inputValue);
      loadPhoto();
    }
    if (prevPage !== page) {
      setStatus('pending');
      setPrevPage(page);
      loadMorePhoto();
    }
  });

  const scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 100,
      behavior: 'smooth',
    });
  };

  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'ok') {
    return (
      <>
        <ul className={CSS.gallery}>
          {photos.map(({ id, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              url={largeImageURL}
              tags={tags}
              modalUrl={modalUrl}
              getTags={getTags}
            />
          ))}
        </ul>
        <Button loadMorePhoto={showNextPage} />
      </>
    );
  }
  if (status === 'error') {
    return alert('Sorry, this query could not be executed, please try again');
  }
};
