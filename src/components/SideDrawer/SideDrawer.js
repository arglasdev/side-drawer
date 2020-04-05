import React from 'react';

import './SideDrawer.css'


export default function sideDrawer(props) {

  let drawerClasses= 'side-drawer';

  // if(props.open){
  //   drawerClasses= 'side-drawer open';
  // }else{
  //   drawerClasses= 'side-drawer';
  // }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Producst</a></li>
        <li><a href="/">Users</a></li>
      </ul>

    </nav>
  );
}
