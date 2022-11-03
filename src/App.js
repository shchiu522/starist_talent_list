// import logo from './logo.svg';
import './App.scss';
import staristLogo from './assets/starist_logo1.png';
import { Component } from "react";

// const startistLogo = require('./assets/starist_logo1.png');

class Header extends Component {
  render() {
    return <header className="App-header">
      <img src={staristLogo} className="App-logo" alt="logo" />
    </header>;
  }
}

function ContentHeader() {
  return <div className={"content-header"}>
    <h2>配音員</h2>
    <div className={`custom-border-yellow`}></div>
  </div>;
}

function MainContent(props) {
  return (<section className={'body'}>
    {props.children}
  </section>);
}

function App() {
  return (<div className="App">
    <Header />
    <MainContent>
      <ContentHeader />

    </MainContent>
  </div>);
}

export default App;
