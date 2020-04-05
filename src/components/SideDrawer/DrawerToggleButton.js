import React from 'react';

import './SideDrawerToggleButton.css'

export default function sideDrawerToggleButtom(props) {

    return (
        <button onClick={ props.click } className="toggle-button">
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
        </button>
    );
}
