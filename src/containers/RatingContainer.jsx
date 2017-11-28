/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import { uniqueId } from 'lodash';

import Rating from '../components/Rating';

class RatingContainer extends React.Component {
  constructor() {
    super();

    this.selectStar = this.selectStar.bind(this);

    this.state = {
      rating: 0,
      ratingContainerId: uniqueId('rating-'),
    };
  }

  componentDidMount() {
    this.ratingContainer = document.querySelector(`#${this.state.ratingContainerId}`);
  }

  selectStar(e) {
    const rating = parseInt(e.currentTarget.dataset.rating, 10);

    this.ratingContainer.classList.add('has-value');
    this.ratingContainer.childNodes.forEach((star) => {
      star.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    this.setState({
      rating,
    });
  }

  render() {
    return (
      <Rating
        selectStar={this.selectStar}
        rating={this.state.rating}
        ratingContainerId={this.state.ratingContainerId}
      />
    );
  }
}

export default RatingContainer;
