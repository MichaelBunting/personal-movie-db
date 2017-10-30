import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Routing from '../helpers/Routing';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routing />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(App);