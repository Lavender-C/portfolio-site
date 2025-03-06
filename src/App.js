import ProfileWindow from './ProfileWindow';
import BrowserWindow from './BrowserWindow';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileWindow />
        <BrowserWindow />
      </header>
    </div>
  );
}

export default App;
