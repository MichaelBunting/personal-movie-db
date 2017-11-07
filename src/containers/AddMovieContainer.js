import React from 'react'
import PropType from 'prop-types'

import MovieModel from '../models/MovieModel';
import AddMovie from '../components/AddMovie'

class AddMovieContainer extends React.Component {
    constructor() {
        super();

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearchInput(e) {
        let inputVal = e.currentTarget.value;

        clearTimeout(this.searchTimeout);

        this.searchTimeout = setTimeout(() => {
            if (inputVal.trim().length > 0) {
                MovieModel.getMovies(inputVal, res => {
                    
                });
            }
        }, 200)
    }

    render() {
        return (
            <AddMovie
                handleSearchInput={this.handleSearchInput}
            />
        )
    }
}

export default AddMovieContainer;