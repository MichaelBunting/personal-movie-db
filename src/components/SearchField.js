import React from 'react'
import PropTypes from 'prop-types'

const SearchField = (props) => {
    return (
        <div className="form__group form__search-container">
            <label className="form__label">Movie Name</label>
            <input 
                type="text"
                className="form__control"
                onInput={props.handleInput}
            />
        </div>
    )
}

SearchField.propTypes = {
    labelName: PropTypes.string,
    handleInput: PropTypes.func.isRequired
}

export default SearchField;