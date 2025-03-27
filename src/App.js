import { useState, useEffect, useRef } from "react";
import { IconWifi, IconBatteryCharging } from '@tabler/icons-react';
import ProfileWindow from './ProfileWindow';
import BrowserWindow from './BrowserWindow';
import ConsoleWindow from './ConsoleWindow';
import FileExplorer from "./FileExplorer";
import './App.css';


const App = () => {
  
  /* ---------------------------- open/close bools ---------------------------- */
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isBrowserOpen, setBrowserOpen] = useState(false);
  const [isConsoleOpen, setConsoleOpen] = useState(false);
  const [isExplorerOpen, setExplorerOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [consoleReset, setConsoleReset] = useState(false); //resets the console animation on close
  const [time, setTime] = useState(new Date()); //for taskbar clock

  // References for windows
  const profileRef = useRef(null);
  const browserRef = useRef(null);
  const consoleRef = useRef(null);
  const explorerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* --------------------- update the taskbar program list -------------------- */
  
  const openPrograms = [];
  if (isProfileOpen) openPrograms.push({ name: "aboutme.exe", ref: profileRef });
  if (isBrowserOpen) openPrograms.push({ name: "browser.exe", ref: browserRef });
  if (isConsoleOpen) openPrograms.push({ name: "console.exe", ref: consoleRef });
  if (isExplorerOpen) openPrograms.push({ name: "explorer.exe", ref: explorerRef });

  /* ----------------------------- console events ----------------------------- */
  const handleOpenConsole = () => {
    setConsoleOpen(true);
    setConsoleReset(false);
  };

  const handleCloseConsole = () => {
    setConsoleOpen(false);
    setConsoleReset(true);
  };


  /* ------------------------- center window function ------------------------- */

  const centerWindow = (ref) => {
    if (ref.current) {
      ref.current.style.position = "absolute";
      ref.current.style.left = "50%";
      ref.current.style.top = "50%";
      ref.current.style.transform = "translate(-50%, -50%)";
      ref.current.style.zIndex = "1000"; // Ensure it's on top
    }
  };

  return (
    <div className="App">
      <div className= "desktop">

      {/* -------------------------------------------------------------------------- */}
      {/*                                  SHORTCUTS                                 */}
      {/* -------------------------------------------------------------------------- */}
        <div className="shortcuts" onClick={() => setProfileOpen(true)}>
          <img src="aboutme-icon.png" alt="Contact" />
          <span>Contact</span>
        </div>

        <div className="shortcuts" onClick={() => setBrowserOpen(true)}>
          <img src="browser-icon.png" alt="Experience" />
          <span>Experience</span>
        </div>

        <div className="shortcuts" onClick ={handleOpenConsole}>
          <img src="console-icon.png" alt="Education" />
          <span>Education</span>
        </div>

        <div className="shortcuts" onClick ={() => setExplorerOpen(true)}>
          <img src="profile-pic.jpg" alt="Projects" />
          <span>Projects</span>
        </div>
      </div>

     {/* -------------------------- window events -------------------------- */}
    
    {isProfileOpen && (
        <ProfileWindow ref={profileRef} onClose={() => setProfileOpen(false)} />
    )}

    {isBrowserOpen && (
        <BrowserWindow ref={browserRef} onClose={() => setBrowserOpen(false)} />
    )}

    {isConsoleOpen && (
        <ConsoleWindow ref={consoleRef} onClose={handleCloseConsole} resetText={consoleReset} />
    )}

      {isExplorerOpen && (
        <FileExplorer ref={explorerRef} onClose={() => setExplorerOpen(false)} />
    )}

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
            <div key={index} className="taskbar-item" onClick={() => centerWindow(program.ref)}>
              {program.name}
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
