import React, { useState } from "react";
import ProfileWindow from './ProfileWindow';
import BrowserWindow from './BrowserWindow';
import './App.css';


const App = () => {
  
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isBrowserOpen, setBrowserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const openPrograms = [];
  if (isProfileOpen) openPrograms.push("aboutme.exe");
  if (isBrowserOpen) openPrograms.push("browser.exe");

  return (
    <div className="App">
      <div className= "desktop">

        {/* Shortcuts */}
        <div className="shortcuts" onClick={() => setProfileOpen(true)}>
          <img src="profile-pic.jpg" alt="Profile Icon" />
          <span>aboutme.exe</span>
        </div>

        <div className="shortcuts" onClick={() => setBrowserOpen(true)}>
          <img src="profile-pic.jpg" alt="Browser Icon" />
          <span>Internet</span>
        </div>

        <div className="shortcuts">
          <img src="profile-pic.jpg" alt="Command Line" />
          <span>Console</span>
        </div>
      </div>

      {/* Windows */}
      {isProfileOpen && <ProfileWindow onClose={() => setProfileOpen(false)} /> }
      {isBrowserOpen && <BrowserWindow onClose={() => setBrowserOpen(false)} /> }

      {/* Taskbar */}
      <div className ="taskbar">
        {/* Menu Button */}
        <div className ="taskbar-menu">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          {menuOpen && (
            <div className="menu-dropdown">
              <button>Option 1</button>
              <button>Option 2</button>
              <button>Option 3</button>
            </div>
          )}
        </div>

        {/* Open Programs */}
        <div className="taskbar-programs">
          {openPrograms.map((program, index) => (
            <div key={index} className="taskbar-item">
              {program}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
