import './App.css';
import React from "react";
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Model from './components/Rock/rock'
import Lights from './components/Rock/lights'

function App() {

  return (
    
    <div className="App">
      <CanvasContainer>
      <Canvas colorManagement 
      shadowMap
      Camera={{position: [-5,4,4], fov: 40}}>
           <Lights/>
        <Suspense fallback={null}>
        <Model/>
     
        </Suspense> 
     
       </Canvas>
     
        </CanvasContainer> 
      
    </div>
  );
}

  const CanvasContainer = styled.div`
  width: 100%;
  height: 100%; 
  `; 
 
export default App;
