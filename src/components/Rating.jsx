import React from 'react';
import PropTypes from 'prop-types';

const Rating = props => (
  <div className="form__group">
    <div className="form__label">Rating</div>

    <ul className="form__rating-container" id={props.ratingContainerId}>
      {[...Array(5).keys()].map(num => (
        <li
          key={num}
          data-rating={num + 1}
          className="form__rating"
          onClick={props.selectStar}
        >
          <i className="fa fa-star" />
        </li>
      ))}
    </ul>
    <input type="hidden" name="rating" value={props.rating} />
  </div>
);

Rating.propTypes = {
  selectStar: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  ratingContainerId: PropTypes.string.isRequired,
};

export default Rating;
