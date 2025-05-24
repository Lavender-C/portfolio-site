import { useState, useEffect, useRef } from "react";
import { IconWifi, IconBatteryCharging } from '@tabler/icons-react';
import { AnimatePresence, motion} from "framer-motion";
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
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const menuTimeout = useRef(null);

  const [consoleReset, setConsoleReset] = useState(false); //resets the console animation on close
  const [time, setTime] = useState(new Date()); //for taskbar clock

  // References for windows
  const profileRef = useRef(null);
  const browserRef = useRef(null);
  const consoleRef = useRef(null);
  const explorerRef = useRef(null);

  const [windows, setWindows] = useState([
    {id: "contact", isOpen: false, ref: profileRef, zIndex: 1},
    {id: "experience", isOpen: true, ref: browserRef, zIndex: 2},
    {id: "education", isOpen: false, ref: consoleRef, zIndex: 3},
    {id: "projects", isOpen: false, ref: explorerRef, zIndex: 4},

  ]);

  useEffect(() => {
    if (!booting) return;
  
    setProgress(0);
    setFadeOut(false);
  
    const interval = setInterval(() => {
      if (menuTimeout.current) clearTimeout(menuTimeout.current);
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => setBooting(false), 1500);
          return 100;
        }
        return oldProgress + 20;
      });
      clearTimeout(menuTimeout.current)
    }, 300);
  
    return () => clearInterval(interval);
  }, [booting]);


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
        win.id === windowId && win.zIndex !== maxZ
          ? { ...win, zIndex: maxZ + 1 }
          : win
      );
    });
    console.log(windowId+" brought to front")
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
    openWindow("education");
    setConsoleReset(false);
  };

  const handleCloseConsole = () => {
    closeWindow("education");
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
          console.log(win.ref.current+" window moved")
        }
        return win;
      });
    });
    bringToFront(windowId);
  };

  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  /* -------------------------- menu button functions ------------------------- */

  const openMenu = () => {
    setMenuOpen(true);
    setMenuVisible(true);
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    scheduleMenuClose()
  };
  
  const closeMenu = () => {
    setMenuVisible(false);

    setTimeout(() => setMenuOpen(false), 300);
    clearTimeout(menuTimeout.current)
  };
  
  const scheduleMenuClose = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    menuTimeout.current = setTimeout(() => {
      setMenuHovered(false);
      if (!menuHovered) {
        closeMenu();
      }
      
    }, 2500);
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
                    <div className="shortcuts" onClick={() => openWindow("contact")}>
                      <img src="aboutme-icon.png" alt="Contact" />
                      <span>Contact</span>
                    </div>

                    <div className="shortcuts" onClick={() => openWindow("experience")}>
                      <img src="browser-icon.png" alt="Experience" />
                      <span>Experience</span>
                    </div>

                    <div className="shortcuts" onClick ={handleOpenConsole}>
                      <img src="console-icon.png" alt="Education" />
                      <span>Education</span>
                    </div>

                    <div className="shortcuts" onClick ={() => openWindow("projects")}>
                      <img src="projects-icon.png" alt="Projects" />
                      <span>Projects</span>
                    </div>
                  </div>

    {/* -------------------------- window events -------------------------- */}

    <AnimatePresence>
      {windows.map(({ id, isOpen, ref, zIndex }) =>
        isOpen ? (
          <motion.div
            key={id}
            ref={ref}
            initial={{ scale: .95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1}}
            exit={{ scale: .9, opacity: 0 }}
            transition={{ opacity: 1, duration: .1, stiffness: 300, dampning:10, type: "spring", ease:"easeIn"}}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex,
            }}
          >

            {id === "contact" && (
              <ProfileWindow ref={ref}
                onClose={() => closeWindow(id)}
                zIndex={zIndex}
                onFocus={() => bringToFront(id)}
              />
            )}
            {id === "experience" && (
              <BrowserWindow ref={ref}
                onClose={() => closeWindow(id)}
                zIndex={zIndex}
                onFocus={() => bringToFront(id)}
              />
            )}
            {id === "education" && (
              <ConsoleWindow ref={ref}
                onClose={handleCloseConsole}
                resetText={consoleReset}
                zIndex={zIndex}
                onFocus={() => bringToFront(id)}
              />
            )}
            {id === "projects" && (
              <FileExplorer ref={ref}
                onClose={() => closeWindow(id)}
                zIndex={zIndex}
                onFocus={() => bringToFront(id)}
              />
            )}
          </motion.div>
        ) : null
      )}
    </AnimatePresence>


      {/* -------------------------------------------------------------------------- */}
      {/*                                   TASKBAR                                  */}
      {/* -------------------------------------------------------------------------- */}

      <div className ="taskbar">

      <div className="taskbar-menu">
        <button
          onClick={openMenu}
        >
          ☰
        </button>

        {menuOpen && (
          <div
            className={`menu-dropdown ${!menuVisible ? "hidden" : ""}`}
            onMouseEnter={() => {
              setMenuHovered(true);
              clearTimeout(menuTimeout.current);
              setMenuHovered(false);
            }}
            onMouseLeave={() => {
              scheduleMenuClose()
            }}
          >
            <button onClick={() => {setWindows(prev => prev.map(win => ({ ...win, isOpen: false })));}}>Close Tabs</button>

            <button onClick={() => {
              closeMenu()
              setWindows(prev => prev.map(win => ({ ...win, isOpen: false })));
              setBooting(true)}}
            >Restart
            </button>

            <button onClick={closeTab}>Shut Down</button>
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
