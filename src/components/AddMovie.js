import React from 'react'
import PropTypes from 'prop-types'

import SearchField from './SearchField';

const AddMovie = (props) => {
    return (
        <div>
            <h1 className="title">Add Movie Review</h1>

            <div className="form">
                <SearchField 
                    labelName="Movie Name"
                    handleInput={props.handleSearchInput}
                />
            </div>
        </div>
    )
}

AddMovie.propTypes = {
    handleSearchInput: PropTypes.func.isRequired
}

export default AddMovie;