import React from 'react'
import PropType from 'prop-types'

import AddMovie from '../components/AddMovie'

class AddMovieContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <AddMovie />
        )
    }
}

export default AddMovieContainer;