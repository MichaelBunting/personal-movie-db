import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const labelID = uniqueId('label-');

const SearchField = props => (
  <div className="form__group form__search-container">
    <label
      htmlFor={labelID}
      className="form__label"
    >
      { props.labelName }

      <input
        id={labelID}
        type="text"
        className="form__control"
        onInput={props.handleInput}
        onClick={props.openSearchField}
      />
    </label>

    <div className="form__search">
      {props.searchResults.length > 0 ?
        props.searchResults.map((res, i) => (
          <div key={i} className="form__search-result">
            {res.title}
          </div>
        ))
      : ''}
    </div>
  </div>
);

SearchField.propTypes = {
  labelName: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInput: PropTypes.func.isRequired,
  openSearchField: PropTypes.func.isRequired,
};

export default SearchField;
