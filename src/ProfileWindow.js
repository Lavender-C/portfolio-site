import React, { useRef, useEffect } from 'react';
import './ProfileWindow.css';
import "./global.css"; 
import resume from './resume_F25.pdf'

const ProfileWindow = () => {
    const elementRef = useRef(null);
    const topBarRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        const topBar = topBarRef.current;
        let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

        const mouseDownHandler = (e) => {
            e.preventDefault();
            mouseX = e.clientX;
            mouseY = e.clientY;
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = (e) => {
            offsetX = e.clientX - mouseX;
            offsetY = e.clientY - mouseY;
            element.style.top = `${element.offsetTop + offsetY}px`;
            element.style.left = `${element.offsetLeft + offsetX}px`;
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        topBar.addEventListener('mousedown', mouseDownHandler);

        return () => {
            topBar.removeEventListener('mousedown', mouseDownHandler);
        };
    }, []);
    
    return (
        <div ref={elementRef} className="profile-window">
            <div ref={topBarRef} className="top-bar">
                <span className="title">aboutme.exe</span>
                <div className="icons">
                    <span className="close">×</span>
                </div>
            </div>
            <div className="content">
                <div className='image-container'>
                    <img src="persona headshot.png" alt="Circular" className='circular-image'/>
                </div>
                <div className='profile-info'>
                    <h2> <i>Lavender Calhoun </i></h2>
                    <h3> Computer Science Grad</h3>
                </div>

                {/* contact links */}

                <div>
                    <a href="https://www.linkedin.com/in/lavender-calhoun/">linkedin</a>&emsp;
                    <a href="mailto:lmcalhoun01@gmail.com">email</a>&emsp;
                    <a href="https://github.com/Lavender-C">github</a> 
                </div>
                
                {/* resume buttton */}
                <br />
                <a href={resume}> <button className = "resume-button">resume</button> </a>
            </div>
        </div>
    );
};

export default ProfileWindow;
