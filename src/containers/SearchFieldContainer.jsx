import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';

import SearchField from '../components/SearchField';
import MovieModel from '../models/MovieModel';

class SearchFieldContainer extends React.Component {
  constructor(props) {
    super(props);

    this.closeSearchField = this.closeSearchField.bind(this);
    this.openSearchField = this.openSearchField.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.searchBox = ReactDOM.findDOMNode(this).querySelector('.form__search');

    document.documentElement.addEventListener('click', (e) => {
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
    }
  }

  updateSearchText(text) {
    this.searchBox.value = text;
  }

  render() {
    return (
      <SearchField
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
