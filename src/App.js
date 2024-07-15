// import logo from './logo.svg';
import React from "react";
// import './App.css';
import './App.scss';

import { Button } from 'carbon-components-react';

import NavigationComponent from "./components/navigationComponent/index";
import FooterComponent from "./components/footerComponent/index";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Netflix123
        </p>
        <Button kind="danger--tertiary">Sample Button</Button>
      </header> */}

      <NavigationComponent/>
      <FooterComponent/>

      {/* <Button kind="danger--tertiary">Sample Button</Button> */}
    </div>
  );
}

export default App;
