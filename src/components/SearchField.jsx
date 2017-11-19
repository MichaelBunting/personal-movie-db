import React from 'react';
import PropTypes from 'prop-types';

const SearchField = props => (
  <div className="form__group form__search-container">
    <label
      htmlFor={props.searchFieldId}
      className="form__label"
    >
      { props.labelName }
    </label>
    <div className="form__control-container">
      <input
        id={props.searchFieldId}
        type="text"
        className="form__control form__control--icon"
        onInput={props.handleInput}
        onFocus={props.handleInput}
        onClick={props.openSearchField}
      />
      <button
        className="form__control-icon"
        onClick={(e) => {
          props.clearSearchField();
          e.target.closest('.form__control-container').querySelector('.form__control').value = '';
        }}
      >
        <i className="fa fa-times-circle-o" />
      </button>
    </div>

    <div className="form__search" id={props.searchBoxId}>
      {props.searchResults.length > 0 ?
        props.searchResults.map(res => (
          <div
            key={res.id}
            className="form__search-result"
            onClick={props.chooseSearchOption}
            data-title={res.title}
          >
            {res.title}
          </div>
        ))
      : ''}
    </div>
  </div>
);

SearchField.propTypes = {
  searchBoxId: PropTypes.string.isRequired,
  searchFieldId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInput: PropTypes.func.isRequired,
  openSearchField: PropTypes.func.isRequired,
  clearSearchField: PropTypes.func.isRequired,
  chooseSearchOption: PropTypes.func.isRequired,
};

export default SearchField;
