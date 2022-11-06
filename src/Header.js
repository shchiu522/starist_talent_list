import staristLogo from './assets/starist_logo1.png';
import { Component } from "react";

// const startistLogo = require('./assets/starist_logo1.png');
export function Header(props) {
  return <header className="App-header" >
    <img src={staristLogo} onClick={() => props.onClick()} className="App-logo" alt="logo" />
  </header>;
}
