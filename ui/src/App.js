import logo from './logo.svg';
import './App.css';
import {AppBar, HomePage, LatestUpdates} from './components'; 

function App() {
  return (
    <div className="App">
      <AppBar />
      <HomePage />
      <LatestUpdates />
    </div>
  );
}

export default App;
