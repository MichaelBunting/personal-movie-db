import React from 'react';

import SearchFieldContainer from '../containers/SearchFieldContainer';

const AddMovie = () => (
  <div>
    <h1 className="title">Add Movie Review</h1>

    <div className="form">
      <SearchFieldContainer
        labelName="Movie Name"
      />
    </div>
  </div>
);

export default AddMovie;
