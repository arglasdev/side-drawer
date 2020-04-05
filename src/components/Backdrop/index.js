import React from 'react';

import './styles.css';

export default function Backdrop(props) {
  return (
    <div className="blackdrop" onClick={props.click}/>
  );
}
