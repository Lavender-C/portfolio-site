import { useState, useEffect } from "react";
import { IconWifi, IconBatteryCharging } from '@tabler/icons-react';
import ProfileWindow from './ProfileWindow';
import BrowserWindow from './BrowserWindow';
import './App.css';


const App = () => {
  
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isBrowserOpen, setBrowserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const openPrograms = [];
  if (isProfileOpen) openPrograms.push("aboutme.exe");
  if (isBrowserOpen) openPrograms.push("browser.exe");

  return (
    <div className="App">
      <div className= "desktop">

      {/* -------------------------------------------------------------------------- */}
      {/*                                  SHORTCUTS                                 */}
      {/* -------------------------------------------------------------------------- */}
        <div className="shortcuts" onClick={() => setProfileOpen(true)}>
          <img src="aboutme-icon.png" alt="Profile Icon" />
          <span>Contact</span>
        </div>

        <div className="shortcuts" onClick={() => setBrowserOpen(true)}>
          <img src="profile-pic.jpg" alt="Browser Icon" />
          <span>Experience</span>
        </div>

        <div className="shortcuts">
          <img src="profile-pic.jpg" alt="Command Line" />
          <span>Education</span>
        </div>
      </div>

     {/* -------------------------- set windows to close -------------------------- */}
      {isProfileOpen && <ProfileWindow onClose={() => setProfileOpen(false)} /> }
      {isBrowserOpen && <BrowserWindow onClose={() => setBrowserOpen(false)} /> }

      {/* -------------------------------------------------------------------------- */}
      {/*                                   TASKBAR                                  */}
      {/* -------------------------------------------------------------------------- */}
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

        {/* ----------------------------- active programs ---------------------------- */}
        <div className="taskbar-programs">
          {openPrograms.map((program, index) => (
            <div key={index} className="taskbar-item">
              {program}
            </div>
          ))}
        </div>

        {/* --------------------------------- toolbox -------------------------------- */}
        <div className="taskbar-toolbox">
            <IconWifi/>
            <IconBatteryCharging/>
            {time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
        </div>

      </div>
    </div>
  );
};

export default App;
