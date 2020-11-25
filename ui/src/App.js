import './App.css';
import {SneekPreview} from './components'; 
import {NavigationBar, AboutSection, RecentChanges, DevelopersPage} from './containers'; 
import serviceList from './data/preview.json'; 

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AboutSection />
      <RecentChanges />
      <SneekPreview title='Check out the different services offered:' serviceList={serviceList}/>
      <DevelopersPage />
    </div>
  );
}

export default App;
