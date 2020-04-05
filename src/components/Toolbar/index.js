import React from 'react';
import SideDrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './styles.css';

export default function toolbar(props) {


  return (
    <header className="toolbar">
    <nav className="toolbar-navigation">
      <div>
        <SideDrawerToggleButton click={ props.drawerToggleClickHandler }/>
      </div>
      <div className="toolbar-navigation-logo"><a href="/">THE LOGO</a></div>
      <div className="spacer"></div>
      <div className="toolbar-navigation-items">
        <ul>          
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
    </header>
  );
}
