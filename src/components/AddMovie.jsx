import React from 'react';

import SearchFieldContainer from '../containers/SearchFieldContainer';
import RatingContainer from '../containers/RatingContainer';

const AddMovie = () => (
  <div>
    <h1 className="title">Add Movie Review</h1>

    <form className="form">
      <SearchFieldContainer
        labelName="Movie Name"
      />
      <RatingContainer />

      <div className="form__group">
        <label htmlFor="reviewField" className="form__label">Review</label>
        <textarea
          id="reviewField"
          rows="5"
          className="form__control form__control--textarea"
          name="review"
        />
      </div>
    </form>
  </div>
);

export default AddMovie;
