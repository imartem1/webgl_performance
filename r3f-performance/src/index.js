import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Scene from './Scene';
import { useThree, extend, Canvas } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { StrictMode } from 'react';

extend({ OrbitControls })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Canvas>
      <Scene/>
    </Canvas>
  </StrictMode>
);
