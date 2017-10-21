import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Test test testfwfw
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(App);