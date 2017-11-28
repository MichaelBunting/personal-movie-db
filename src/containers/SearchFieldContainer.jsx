import React from 'react';
import PropType from 'prop-types';
import {
  uniqueId,
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
    this.chooseSearchOption = this.chooseSearchOption.bind(this);

    this.state = {
      searchResults: [],
      searchBoxId: uniqueId('searchbox-'),
      searchFieldId: uniqueId('searchfield-'),
    };
  }

  componentDidMount() {
    this.searchBox = document.querySelector(`#${this.state.searchBoxId}`);
    this.searchField = document.querySelector(`#${this.state.searchFieldId}`);

    document.documentElement.addEventListener('click', () => {
      this.closeSearchField();
      this.searchField.nextSibling.classList.remove('in');
    });
  }

  closeSearchField() {
    this.searchBox.classList.remove('in');
  }

  openSearchField() {
    if (this.state.searchResults.length > 0) {
      this.searchBox.classList.add('in');
      this.searchField.nextSibling.classList.add('in');
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
    }
  }

  updateSearchText(text) {
    this.searchBox.value = text;
  }

  clearSearchField() {
    this.searchField.value = '';

    setTimeout(() => {
      this.setState({
        searchResults: [],
      });
    }, 300);
  }

  chooseSearchOption(e) {
    this.searchField.value = e.target.dataset.title;
  }

  render() {
    return (
      <SearchField
        searchBoxId={this.state.searchBoxId}
        searchFieldId={this.state.searchFieldId}
        labelName={this.props.labelName}
        handleInput={this.handleInput}
        searchResults={this.state.searchResults}
        openSearchField={this.openSearchField}
        closeSearchField={this.closeSearchField}
        clearSearchField={this.clearSearchField}
        chooseSearchOption={this.chooseSearchOption}
      />
    );
  }
}

SearchFieldContainer.propTypes = {
  labelName: PropType.string,
};

SearchFieldContainer.defaultProps = {
  labelName: 'Label',
};

export default SearchFieldContainer;
