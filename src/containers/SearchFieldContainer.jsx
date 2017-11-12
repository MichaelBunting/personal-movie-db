import React from 'react';
import PropType from 'prop-types';
import {
  uniqueId
} from 'lodash';

import SearchField from '../components/SearchField';
import MovieModel from '../models/MovieModel';

class SearchFieldContainer extends React.Component {
  constructor(props) {
    super(props);

    this.closeSearchField = this.closeSearchField.bind(this);
    this.openSearchField = this.openSearchField.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.clearSearchField = this.clearSearchField.bind(this);

    this.state = {
      searchResults: [],
      searchBoxId: uniqueId('searchbox-'),
    };
  }

  componentDidMount() {
    this.searchBox = document.querySelector(`#${this.state.searchBoxId}`);

    document.documentElement.addEventListener('click', () => {
      this.closeSearchField();
    });
  }

  closeSearchField() {
    this.searchBox.classList.remove('in');
  }

  openSearchField() {
    if (this.state.searchResults.length > 0) {
      this.searchBox.classList.add('in');
    }
  }

  handleInput(e) {
    const inputVal = e.currentTarget.value;

    clearTimeout(this.searchTimeout);

    if (inputVal.trim().length > 0) {
      this.searchTimeout = setTimeout(() => {
        MovieModel.getMovies(inputVal, (res) => {
          this.setState({
            searchResults: res,
          });

          this.openSearchField();
        });
      }, 200);
    } else {
      this.closeSearchField();
      this.clearSearchField();
    }
  }

  updateSearchText(text) {
    this.searchBox.value = text;
  }

  clearSearchField() {
    setTimeout(() => {
      this.setState({
        searchResults: [],
      });
    }, 300);
  }

  render() {
    return (
      <SearchField
        searchBoxId={this.state.searchBoxId}
        labelName={this.props.labelName}
        handleInput={this.handleInput}
        searchResults={this.state.searchResults}
        openSearchField={this.openSearchField}
        closeSearchField={this.closeSearchField}
      />
    );
  }
}

SearchFieldContainer.propTypes = {
  labelName: PropType.string,
};

SearchFieldContainer.defaultProps = {
  labelName: 'Input',
};

export default SearchFieldContainer;
