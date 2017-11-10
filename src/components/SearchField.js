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
                onClick={props.openSearchField}
            />

            <div className="form__search">
                {props.searchResults.length > 0 ?
                    props.searchResults.map((res, i) => (
                        <div
                            key={i}
                            className="form__search-result"
                        >
                            {res.title}
                        </div>
                    ))
                : ''}
            </div>
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         searchResults: state.searchResults
//     }
// }

SearchField.propTypes = {
    labelName: PropTypes.string,
    handleInput: PropTypes.func.isRequired
}

export default SearchField;