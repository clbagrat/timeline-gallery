import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Main } from "app";
import { DependencyProvider } from 'dependency-provider';
import * as wasm from 'fs-walker';

wasm.default().then(() => wasm.greet('12313'));
const fs = window.require('fs');
console.log({fs})

ReactDOM.render(
  <React.StrictMode>
    <DependencyProvider value={{fs}}>
      <Main />
    </DependencyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
