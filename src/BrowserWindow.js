import React, { useState } from "react";
import { IconX, IconSearch, IconHomeFilled, IconRefresh, IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import ExperiencePost from "./ExperiencePost";
import "./BrowserWindow.css";

const BrowserWindow = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("home");

  /* -------------------------------------------------------------------------- */
  /*                                POST CONTENT                                */
  /* -------------------------------------------------------------------------- */

  const posts = [
    {
      id: "1",
      image: "profile-pic.jpg",
      title: "SULI Intern",
      subtitle: "Argonne National Lab · Summer 2023",
      body: [
        "Contributed to a Python library for streamlining machine learning workflows on Linux systems with high-performance computing nodes.",
        "Automated dataset generation for molecular dynamics simulations, reducing manual processing by 68%.",
        "Optimized training cycles by creating workflows to generate datasets addressing model weaknesses.",
      ],
    },
    {
      id: "2",
      image: "profile-pic.jpg",
      title: "Undergraduate Student Researcher",
      subtitle: "Wayne State University · Dec 2022 - Apr 2023",
      body: [
        "Explored the Neural Radiance Fields (NeRF) algorithm, focusing on its architecture, principles, and applications.",
        "Refined data preprocessing and model optimization, reducing novel view interpolation error by 15%.",
      ],
    },
    {
      id: "3",
      image: "profile-pic.jpg",
      title: "Frontend Design Intern",
      subtitle: "Wilson Adaptive Technologies · Jun 2022 - Aug 2022",
      body: [
        "Created mockups and redesigned four website pages to enhance user experience, accessibility, and branding.",
        "Developed a comprehensive style guide, standardizing color palettes, fonts, and design elements.",
        "Conducted three user interviews and created detailed profiles to inform design decisions.",
      ],
    },
    {
      id: "4",
      image: "profile-pic.jpg",
      title: "CADeT Cyber Initiative Student Employee",
      subtitle: "Great Lakes Research Center · Dec 2022 - Apr 2023",
      body: [
        "Worked on cybersecurity initiatives, exploring vulnerability detection techniques.",
        "Implemented security protocols and assisted in risk assessment studies.",
      ],
    },
  ];

  /* ------------------------------ Tab Switching ----------------------------- */

  const renderContent = () => {
    if (activeTab === "experience") {
      return (
        <div className="experience-section">
          <div className="scroll-container">
          <div className="experience-header">Header Text</div>
            {posts.map((post) => (
              <ExperiencePost key={post.id} {...post} />
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "home") return <p>Welcome to my site! This is the Home tab.</p>;
  };

  /* -------------------------------------------------------------------------- */

    return (
      <div className="browser-window">
        {/* Top Navigation Bar */}
        <div className="top-bar">
                <span className="title">Browser</span>
                <div className="icons" onClick={onClose}>
                    <span className="close"> <IconX size={12} stroke={5}/> </span>
                </div>
        </div>

        {/* ------------------------------- Search Bar ------------------------------- */}

        <div className="search-bar">

          <div>
            <IconHomeFilled size={20}/>
            <IconRefresh stroke={3}/>
          </div>
          
          <div className="search-bubble"> Search... <IconSearch size={15} stroke={4} /> </div>

          <div>
            <IconArrowLeft />
            <IconArrowRight />
          </div>
          
        </div>

        {/* ---------------------------------- Tabs ---------------------------------- */}

        <div className="browser-tabbar">
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
        </div>

        {/* --------------------------------- Content -------------------------------- */}
        <div className="main-content">
          {renderContent()}</div>
      </div>
    );
};

export default BrowserWindow;
