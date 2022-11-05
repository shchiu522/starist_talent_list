import staristLogo from './assets/starist_logo1.png';
import { Component } from "react";

// const startistLogo = require('./assets/starist_logo1.png');
export class Header extends Component {
  render() {
    return <header className="App-header">
      <img src={staristLogo} className="App-logo" alt="logo" />
    </header>;
  }
}
