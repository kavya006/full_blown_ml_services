import logo from './logo.svg';
import './App.css';
import {AppBar, HomePage, LatestUpdates, SneekPreview} from './components'; 

function App() {
  return (
    <div className="App">
      <AppBar />
      <HomePage />
      <LatestUpdates />
      <SneekPreview />
    </div>
  );
}

export default App;
