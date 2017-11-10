import React from 'react'
import PropType from 'prop-types'
// import { connect } from 'react-redux';

// import {
//     getSearchResults
// } from '../Actions';

// import MovieModel from '../models/MovieModel';
import AddMovie from '../components/AddMovie'

class AddMovieContainer extends React.Component {
    constructor() {
        super();

        // this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    // handleSearchInput(e) {
    //     let inputVal = e.currentTarget.value;

    //     clearTimeout(this.searchTimeout);

    //     this.searchTimeout = setTimeout(() => {
    //         if (inputVal.trim().length > 0) {
    //             MovieModel.getMovies(inputVal, res => {
    //                 this.props.dispatch(getSearchResults(res));
    //             });
    //         }
    //     }, 200)
    // }

    render() {
        return (
            <AddMovie />
        )
    }
}

export default AddMovieContainer;