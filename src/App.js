// import logo from './logo.svg';
import './App.scss';
import staristLogo from './assets/starist_logo1.png';
import { Component, useState } from "react";
import { TalentList } from './TalentList';
import Dropdown from './Dropdown';
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
    <div>
      <h2>配音員</h2>
      <div className={`custom-border-yellow`}></div>
    </div>
    <Dropdown />

  </div>;
}

function MainContent(props) {
  return (<section className={'body'}>
    {props.children}
  </section>);
}

function App() {
  const [talent, setTalent] = useState(['test', 'test2']);

  return (<div className="App">
    <Header />
    <MainContent>
      <ContentHeader />
      <TalentList talent={talent} />
    </MainContent>
  </div>);
}

export default App;
