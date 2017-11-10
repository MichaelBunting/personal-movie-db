import React from 'react'
import PropTypes from 'prop-types'

import SearchFieldContainer from '../containers/SearchFieldContainer'

const AddMovie = () => {
    return (
        <div>
            <h1 className="title">Add Movie Review</h1>

            <div className="form">
                <SearchFieldContainer 
                    labelName="Movie Name"
                />
                {/* <SearchField 
                    labelName="Movie Name"
                /> */}
            </div>
        </div>
    )
}

export default AddMovie;