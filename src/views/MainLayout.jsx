import React from 'react';
import PropTypes from 'prop-types';

import SidebarContainer from '../containers/SidebarContainer';
import NavbarContainer from '../containers/NavbarContainer';

const MainLayout = props => (
  <div>
    <SidebarContainer />
    <NavbarContainer />

    <div className="content">
      {props.children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

MainLayout.defaultProps = {
  children: <div />,
};

export default MainLayout;
