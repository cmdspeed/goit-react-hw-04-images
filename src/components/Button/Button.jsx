import CSS from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ loadMorePhoto }) {
  return (
    <div className={CSS.ButtonWraper}>
      <button onClick={loadMorePhoto} className={CSS.Button}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  loadMorePhoto: PropTypes.func,
};
