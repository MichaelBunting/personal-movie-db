import React from 'react'

import SidebarContainer from '../containers/SidebarContainer'
import NavbarContainer from '../containers/NavbarContainer'

const MainLayout = (props) => {
    return (
        <div>
            <SidebarContainer />
            <NavbarContainer />

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout;