import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SidebarContainer from './SidebarContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SidebarContainer />

                <div class="content">
                    
                </div>
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