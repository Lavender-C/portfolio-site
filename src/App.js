import { useState, useEffect, useRef } from "react";
import { IconWifi, IconBatteryCharging } from '@tabler/icons-react';
import ProfileWindow from './ProfileWindow';
import BrowserWindow from './BrowserWindow';
import ConsoleWindow from './ConsoleWindow';
import FileExplorer from "./FileExplorer";
import './App.css';


const App = () => {

  const [booting, setBooting] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [consoleReset, setConsoleReset] = useState(false); //resets the console animation on close
  const [time, setTime] = useState(new Date()); //for taskbar clock

  // References for windows
  const profileRef = useRef(null);
  const browserRef = useRef(null);
  const consoleRef = useRef(null);
  const explorerRef = useRef(null);

  const [windows, setWindows] = useState([
    {id: "profile", isOpen: false, ref: profileRef, zIndex: 1},
    {id: "browser", isOpen: false, ref: browserRef, zIndex: 2},
    {id: "console", isOpen: false, ref: consoleRef, zIndex: 3},
    {id: "explorer", isOpen: false, ref: explorerRef, zIndex: 4},

  ]);


  useEffect(() => {
    const interval = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress >= 100) {
                clearInterval(interval);
                setFadeOut(true);
                setTimeout(() => setBooting(false), 1500);
                return 100;
            }
            return oldProgress + 10;
        });
    }, 200);

    return () => clearInterval(interval);
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------------------- window management --------------------------- */

  // Bring a window to the front by updating zIndex
  const bringToFront = (windowId) => {
    setWindows((prevWindows) => {
      const maxZ = Math.max(...prevWindows.map((win) => win.zIndex));
      return prevWindows.map((win) =>
        win.id === windowId && win.zIndex !== maxZ // Only update if necessary
          ? { ...win, zIndex: maxZ + 1 }
          : win
      );
    });
  };

  // Open a window and bring it to the front
  const openWindow = (windowId) => {
    setWindows((prevWindows) => {
      const maxZ = Math.max(...prevWindows.map((win) => win.zIndex));
      return prevWindows.map((win) =>
        win.id === windowId
          ? { ...win, isOpen: true, zIndex: maxZ + 1 }
          : win
      );
    });
  };

  // Close a window
  const closeWindow = (windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((win) =>
        win.id === windowId ? { ...win, isOpen: false } : win
      )
    );
  };

  /* ----------------------------- console events ----------------------------- */
  const handleOpenConsole = () => {
    openWindow("console");
    setConsoleReset(false);
  };

  const handleCloseConsole = () => {
    closeWindow("console");
    setConsoleReset(true);
  };


  /* ------------------------- center window function ------------------------- */

  const centerWindow = (windowId) => {
    setWindows((prevWindows) => {
      return prevWindows.map((win) => {
        if (win.id === windowId && win.ref.current) {
          win.ref.current.style.position = "absolute";
          win.ref.current.style.left = "50%";
          win.ref.current.style.top = "50%";
          win.ref.current.style.transform = "translate(-50%, -50%)";
        }
        return win;
      });
    });
    bringToFront(windowId);
  };

  return (
    <div className="App">
      {booting && (
                <div className={`boot-screen ${fadeOut ? "fade-out" : ""}`}>
                    <h1>Hello, User!</h1>
                    <i>Loading, please wait...</i>
                    <div className="loading-bar-container">
                        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            )}
                  <div className={`desktop ${booting ? "hidden" : ""}`}>

                  {/* -------------------------------------------------------------------------- */}
                  {/*                                  SHORTCUTS                                 */}
                  {/* -------------------------------------------------------------------------- */}
                    <div className="shortcuts" onClick={() => openWindow("profile")}>
                      <img src="aboutme-icon.png" alt="Contact" />
                      <span>Contact</span>
                    </div>

                    <div className="shortcuts" onClick={() => openWindow("browser")}>
                      <img src="browser-icon.png" alt="Experience" />
                      <span>Experience</span>
                    </div>

                    <div className="shortcuts" onClick ={handleOpenConsole}>
                      <img src="console-icon.png" alt="Education" />
                      <span>Education</span>
                    </div>

                    <div className="shortcuts" onClick ={() => openWindow("explorer")}>
                      <img src="profile-pic.jpg" alt="Projects" />
                      <span>Projects</span>
                    </div>
                  </div>


    {/* -------------------------- window events -------------------------- */}
    
    {windows.map(({ id, isOpen, ref, zIndex }) =>
      isOpen && (
        <div key={id}>  
          {id === "profile" && <ProfileWindow ref={ref} onClose={() => closeWindow(id)} zIndex={zIndex} onFocus={() => bringToFront(id)} />}
          {id === "browser" && <BrowserWindow ref={ref} onClose={() => closeWindow(id)} zIndex={zIndex} onFocus={() => bringToFront(id)}/>}
          {id === "console" && <ConsoleWindow ref={ref} onClose={handleCloseConsole} resetText={consoleReset} zIndex={zIndex} onFocus={() => bringToFront(id)}/>}
          {id === "explorer" && <FileExplorer ref={ref} onClose={() => closeWindow(id)} zIndex={zIndex} onFocus={() => bringToFront(id)}/>}
        </div>
      )
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
              <button>Sleep</button>
              <button>Restart</button>
              <button>Close</button>
            </div>
          )}
        </div>

        {/* ----------------------------- active programs ---------------------------- */}

        <div className="taskbar-programs">
          {windows
            .filter((win) => win.isOpen)
            .map((win) => (
              <div
                key={win.id}
                className="taskbar-item"
                onClick={() => centerWindow(win.id)}
                title="click me to focus the window!"
              >
                {win.id}.exe
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
