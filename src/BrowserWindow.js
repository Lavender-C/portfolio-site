// src/BrowserWindow.js
import React, { useState } from "react";
import "./BrowserWindow.css";

const BrowserWindow = () => {
const [activeTab, setActiveTab] = useState("home");

  // Content for each tab
const tabContent = {
    home: "Welcome to my homepage! This is where I introduce myself.",
    experience: "Here is my experience: I have worked on many projects...",
    education: "WAYNE STATE UNIVERSITY GRAD. DATE: MAY 2024 B.S in Computer Science"

};

return (
    <div className="browser-window">
      {/* Tab Bar */}
    <div className="browser-top-bar">
        <button 
        className={`tab-button ${activeTab === "home" ? "active" : ""}`} 
        onClick={() => setActiveTab("home")}
        >
        Home
        </button>
        <button 
        className={`tab-button ${activeTab === "experience" ? "active" : ""}`} 
        onClick={() => setActiveTab("experience")}
        >
        Experience
        </button>
        <button 
        className={`tab-button ${activeTab === "education" ? "active" : ""}`} 
        onClick={() => setActiveTab("education")}
        >
        Education
        </button>
    </div>

    {/* Main Content Area */}
    <div className="browser-content">
        <p>{tabContent[activeTab]}</p>
    </div>
    </div>
);
};

export default BrowserWindow;
