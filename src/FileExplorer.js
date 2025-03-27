import React, { useState, useRef, useEffect, forwardRef } from "react";
import {IconX} from '@tabler/icons-react';
import "./FileExplorer.css";


/* -------------------------------------------------------------------------- */
/*                                GALLERY FILES                               */
/* -------------------------------------------------------------------------- */

const fileStructure = {
    "Projects": {
        "Room Raiser":{
            files: [
                { name: "first draft.jpg", src: "room-raiser/first draft.png", description: "Description for image 1" },
                { name: "image2.jpg", src: "/images/image2.jpg", description: "Description for image 2" }
            ]
        },
        "Tune Tracer": {
            files: [
                { name: "image3.jpg", src: "/images/image3.jpg", description: "Description for image 3" }
            ]
        },
        "NeRF": {
            files: [
                {name: "image4.jpg", src: "nerf/image4.jpg", description: "Description for image 4"}
            ]
        }
    }
    
};

const FileExplorer = forwardRef(({ onClose, zIndex, onClick }, ref) => {

    /* ---------------------------- movable titlebar ---------------------------- */
    const elementRef = ref || useRef(null);
    const topBarRef = useRef(null);
    

    /* ------------------------ breadcrumb functionality ------------------------ */
    const [currentPath, setCurrentPath] = useState(["Projects"]);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const navigateTo = (folder) => {
        setCurrentPath([...currentPath, folder]);
    };
    
    const goBack = (index) => {
        setCurrentPath(currentPath.slice(0, index + 1));
    };
    
    const openImage = (image) => {
        setSelectedImage(image);
    };
    
    /*
    const closeImage = () => {
        setSelectedImage(null);
    };
    */
    
    let currentFolder = fileStructure;
    currentPath.forEach(folder => {
        if (currentFolder[folder]) {
            currentFolder = currentFolder[folder];
        }
    });
    
    /* ------------------------------ draging logic ----------------------------- */

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
        <div ref={elementRef} className="file-explorer" style={{ zIndex}} onMouseDown={onClick}>

            <div ref={topBarRef} className="top-bar">

                <span className="title">file-explorer.exe</span>
                <div className="icons" onClick={onClose}>
                    <span className="close"> <IconX size={12} stroke={5}/> </span>
                </div>
            </div>

            {/* ----------------------------- breadcrumb bar ----------------------------- */}

            <div className="breadcrumb-bar">
                {currentPath.map((folder, index) => (
                        <span key={index} onClick={() => goBack(index)}>
                            {folder} {index < currentPath.length - 1 ? "/" : ""}
                        </span>
                    ))}
            </div>

            {/* ----------------------------- window content ----------------------------- */}
            <div className="content">

                {currentFolder.files ? (
                    <div className="files">
                        {currentFolder.files.map((file, index) => (
                            <div key={index} className="file" onClick={() => openImage(file)}>
                                <img src="profile-pic.jpg" alt={file.name} />
                                <span>{file.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="folders">
                        {Object.keys(currentFolder).map((folder, index) => (
                            <div key={index} className="folder" onClick={() => navigateTo(folder)}>
                                <img src="profile-pic.jpg" alt={folder} />
                                <span>{folder}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* -------------------------------- lightbox -------------------------------- */}

                {selectedImage && (
                    <div className="lightbox" onClick={() => setSelectedImage(null)}>

                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

                            <img src={selectedImage.src} alt={selectedImage.name} />
                            <p>{selectedImage.description}</p>

                            <button className="close-lightbox" onClick={() => setSelectedImage(null)}>✖</button>

                        </div>
                    </div>
                )}

            </div>
            
        </div>
    );
});

export default FileExplorer;
