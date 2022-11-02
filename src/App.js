import logo from './logo.svg';
import './App.scss';
import startistLogo from './assets/starist_logo1.png';
// const startistLogo = require('./assets/starist_logo1.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={startistLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
