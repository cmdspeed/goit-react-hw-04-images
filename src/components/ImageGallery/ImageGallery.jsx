import { Component } from 'react';

import fetchQuery from '../API/API';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import CSS from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    photos: [],
    status: 'none',
  };

  loadPhoto = () => {
    const { inputValue, page } = this.props;
    fetchQuery(inputValue, page)
      .then(response => {
        this.setState({
          photos: response.hits,
          status: 'ok',
        });
      })
      .catch(error => this.setState({ status: 'error' }));
  };

  loadMorePhoto = () => {
    const { inputValue, page } = this.props;
    fetchQuery(inputValue, page)
      .then(response => {
        this.setState(old => ({
          photos: [...old.photos, ...response.hits],
          status: 'ok',
        }));
      })
      .catch(error => this.setState({ status: 'error' }));
  };

  componentDidUpdate(prevProps) {
    this.scrollWindow();
    if (prevProps.inputValue !== this.props.inputValue) {
      this.setState({
        status: 'pending',
      });
      this.loadPhoto();
    }
    if (prevProps.page !== this.props.page) {
      this.setState({
        status: 'pending',
      });
      this.loadMorePhoto();
    }
  }

  scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 100,
      behavior: 'smooth',
    });
  };

  render() {
    const { photos, status } = this.state;
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
                modalUrl={this.props.modalUrl}
                getTags={this.props.getTags}
              />
            ))}
          </ul>
          <Button loadMorePhoto={this.props.showNextPage} />
        </>
      );
    }
    if (status === 'error') {
      return alert('Sorry, this query could not be executed, please try again');
    }
  }
}
