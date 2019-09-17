import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Button, Link, TextField, Toolbar, Typography } from '@material-ui/core';
import { TopCanvasView } from './compoments/top-canvas-view'
class App extends React.Component {
  render():
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | string
  | number
  | {}
  | React.ReactNodeArray
  | React.ReactPortal
  | boolean
  | null
  | undefined {
    return (
      <div className="App">
        <AppBar position="relative" color="inherit">
          <Toolbar>
            <Button href="./references/" className="App-link">
              References
            </Button>
            <Button href="./swagger/" className="App-link">
              Api Docs
            </Button>
          </Toolbar>
        </AppBar>
        <TopCanvasView />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
