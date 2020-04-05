import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import ToolBar from './components/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {

  function usePrevious(value){
    const ref = useRef();
    useEffect(() =>{
      ref.current = value;
    });

    return ref.current;
  }

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  // const prevSideDrawerOpen = usePrevious(sideDrawerOpen);

  const drawerToggleClickHandler= () => {

    setSideDrawerOpen(!sideDrawerOpen);
    // setSideDrawerOpen(!prevSideDrawerOpen);    
  }

  const backdropClickHandler = () =>{
    setSideDrawerOpen(false);
    // console.log(prevSideDrawerOpen);
    console.log(sideDrawerOpen);
  }

  const trueler = () =>{    
    setSideDrawerOpen(true);
    // console.log(prevSideDrawerOpen);
    console.log(sideDrawerOpen);
  }

  const falseler = () =>{    
    setSideDrawerOpen(false);
    // console.log(prevSideDrawerOpen);
    console.log(sideDrawerOpen);
  }

  let sideDrawer;
  let backdrop;

  if(sideDrawerOpen){

    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }

  return (
    <div style={{height: '100%'}}>      
      <ToolBar drawerToggleClickHandler={drawerToggleClickHandler}/>      
      {/* <SideDrawer open={sideDrawerOpen}/>; */}
      {backdrop}
      {sideDrawer}
      <main style={{ marginTop: '64px'}}>
        {/* <button style={{ marginLeft: '400px', zIndex:'300'}} onClick={backdropClickHandler}>backdropClickHandler</button>
        <button style={{ marginLeft: '50px', zIndex:'300' }} onClick={drawerToggleClickHandler}>drawerToggleClickHandler</button>
        <button style={{ marginLeft: '50px', zIndex:'300' }} onClick={trueler}>true</button>
        <button style={{ marginLeft: '50px', zIndex:'300' }} onClick={falseler}>false</button> */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt temporibus expedita aut optio magni molestias accusamus delectus explicabo odio animi eius, omnis ad dolor! In aperiam recusandae harum asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt temporibus expedita aut optio magni molestias accusamus delectus explicabo odio animi eius, omnis ad dolor! In aperiam recusandae harum asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt temporibus expedita aut optio magni molestias accusamus delectus explicabo odio animi eius, omnis ad dolor! In aperiam recusandae harum asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt temporibus expedita aut optio magni molestias accusamus delectus explicabo odio animi eius, omnis ad dolor! In aperiam recusandae harum asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt temporibus expedita aut optio magni molestias accusamus delectus explicabo odio animi eius, omnis ad dolor! In aperiam recusandae harum asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt temporibus expedita aut optio magni molestias accusamus delectus explicabo odio animi eius, omnis ad dolor! In aperiam recusandae harum asperiores?</p>        
      </main>
    </div>
  );
}

export default App;
