import React, { useState, useRef, useEffect, forwardRef } from "react";
import {IconX} from '@tabler/icons-react';
import "./FileExplorer.css";


/* -------------------------------------------------------------------------- */
/*                                GALLERY FILES                               */
/* -------------------------------------------------------------------------- */

const fileStructure = {
    "Projects": {

        "Tune Tracer": {
            files: [
                { name: "prediction screen.png", src: "tune-tracer/app-screenshot.png", description: "This mockup was designed for my senior capstone project 'Tune Tracer'. Our app was built in Dart/Flutter and used Google's Material 3 design components." },
                { name: "model results.png", src: "tune-tracer/model charts.png", description: "Tune Tracer included a ML model that would predict the mode of a musical piece. The model used speech-recognition techniques to learn to categorize between 8 different modes of music. Above are excerpts of the training process. The left image shows how a user's recording is processed for prediction.The right image is a confusion matrix that shows the accuracy of a model." },
            ]
        },

        "Undergrad Research": {
            files: [
                {name: "output example.mp4", src: "nerf/20250403-2005-02.4550001.mp4", description: "During my junior year, I conducted research on the Neural Radiance Field (NeRF) method of deep learning. The algorithm takes a dataset of 2D images of a subject at different angles, and interpolates frames to make a complete 3D representation of the subject." },
                {name: "hyper-nerf.mov", src: "nerf/20250403-2012-06.1250237.mp4", description: "As a part of my deliverables, I created a presentation to explain the NeRF model to an audience that may be unfamiliar with ML techniques and terminology. In this slide, I explain one of the methods used to improve NeRF to better recreate the shape of complex and moving objects." }
            ]
        },

        "Room Raiser":{
            files: [
                { name: "first draft.jpg", src: "room-raiser/first draft.png", description: "A mockup I designed for my Software Engineering project 'Room Raiser'. The purpose of the app was to allow users to draft 2D floorplans, then view the floorplan in 3D." },
                { name: "live app.jpg", src: "room-raiser/sketch.png", description: "This is the working demo of Room Raiser. I implemented the undo/redo function, the eraser, the export function, the line thickness, the length and angle measurements, the grid and the lines snapping to the grid."},
                { name: "3d-model.png", src: "room-raiser/image.png", description: "This is the output of the 3D generation part of Room Raiser. I created a Docker container with our app, Blender and included the 'FloorplanToBlender3D' repository by grebstew to allow for a streamlined user experience." }
            ]
        }
    }
    
};

const FileExplorer = forwardRef(({ onClose, zIndex, onFocus }, ref) => {

    /* ---------------------------- movable titlebar ---------------------------- */
    const elementRef = ref || useRef(null);
    const topBarRef = useRef(null);
    

    /* ------------------------ breadcrumb functionality ------------------------ */
    const [currentPath, setCurrentPath] = useState(["Projects"]);
    const [selectedMedia, setselectedMedia] = useState(null);
    const isVideo = selectedMedia?.src.match(/\.(mp4|webm|ogg)$/i);
    
    const navigateTo = (folder) => {
        setCurrentPath([...currentPath, folder]);
    };
    
    const goBack = (index) => {
        setCurrentPath(currentPath.slice(0, index + 1));
    };
    
    const openImage = (image) => {
        setselectedMedia(image);
    };
    
    /*
    const closeImage = () => {
        setselectedMedia(null);
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

                if (!element || !topBar) return;

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
    
        <div ref={elementRef} className="file-explorer" style={{ zIndex}} >

            <div ref={topBarRef} className="top-bar" onMouseDown={onFocus}>

                <span className="title">File Explorer</span>
                <div className="icons" onClick={onClose}>
                    <span className="close"> <IconX size={12} stroke={5}/> </span>
                </div>
            </div>

            {/* ----------------------------- breadcrumb bar ----------------------------- */}

            <div className="breadcrumb-bar" title="return to the projects folder">
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
                                <img src="imagefile-icon.png" alt={file.name} />
                                <span>{file.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="folders">
                        {Object.keys(currentFolder).map((folder, index) => (
                            <div key={index} className="folder" onClick={() => navigateTo(folder)}>
                                <img src="file-icon.png" alt={folder} />
                                <span>{folder}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* -------------------------------- lightbox -------------------------------- */}

                {selectedMedia && (
                    <div className="lightbox" onClick={() => setselectedMedia(null)}>

                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

                        {isVideo ? (
                            <video
                                src={selectedMedia.src}
                                controls
                                className="media-embed"
                            />
                            ) : (
                            <img
                                src={selectedMedia.src}
                                alt={selectedMedia.name}
                                className="media-embed"
                            />
                            )}
                            <div className="lightbox-text">
                                <p>{selectedMedia.description}</p>
                            </div>

                            <button className="close-lightbox" onClick={() => setselectedMedia(null)}>✖</button>

                        </div>
                    </div>
                )}

            </div>
            
        </div>
    );
});

export default FileExplorer;
