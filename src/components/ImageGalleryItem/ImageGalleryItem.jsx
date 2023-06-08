import CSS from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ url, tags, modalUrl, getTags }) {
  return (
    <li className={CSS.galleryItem}>
      <img
        src={url}
        alt={tags}
        className={CSS.img}
        onClick={() => {
          modalUrl(url);
          getTags(tags);
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.string,
  modalUrl: PropTypes.func,
  getTags: PropTypes.func,
};
