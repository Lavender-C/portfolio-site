import React, { useRef, useEffect } from 'react';
import './ProfileWindow.css';

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

    //fix
    const onButtonClick = () => {
        fetch("/public/resume_F25.pdf").then((Response) => {
            Response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);
                
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = "CalhounResume.pdf";
                    alink.click();
            });
        });
    };
    
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
                <h3>
                Lavender Calhoun
                </h3>
                <br />
                Detroit, MI
                <br />
                linkedin 313-564-9485 e-mail
                {/* resume buttton */}
                <br />
                <button className = "resume-button" onClick={onButtonClick}>resume</button>
            </div>
        </div>
    );
};

export default ProfileWindow;
