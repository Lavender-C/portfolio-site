import React, { useRef, useEffect, forwardRef } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./ConsoleWindow.module.css";
import Typewriter from 'react-ts-typewriter';


interface ConsoleWindowProps {
    onClose: () => void;
    zIndex: number;
    onClick: () => void;
    onFocus: () => void;
}

const ConsoleWindow = forwardRef<HTMLDivElement, ConsoleWindowProps>(({ onClose, zIndex, onFocus }, ref) => {

        /* ----------------------------- draggable logic ---------------------------- */
        
    const elementRef = useRef<HTMLDivElement>(null);
    const topBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
            const element = (ref as React.RefObject<HTMLDivElement>)?.current || elementRef.current;
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
        <div ref={ref || elementRef} className={styles.consoleWindow} style={{ zIndex }} >
            
            <div ref = {topBarRef} className="top-bar" onMouseDown={onFocus}>
                <span className="title">Console</span>
                <div className="icons" onClick={onClose}>
                    <span className="close"> <IconX size={12} stroke={5}/> </span>
                </div>
            </div>

            <div className={styles.consoleContent}>
                User@desktop:~$ cat education.txt<br/> <br/>
                <Typewriter
                            speed={10}
                            delay={5}
                            text={`B.S. in Computer Science from Wayne State University
                                - Graduated: May 2024, GPA 3.68 (cum laude)

                                Relevant Courses: 
                                    - Data Structures and Algorithms
                                    - Web Development, Database Management

                                Achievements: 
                                - Society of Computer Developers Member
                                - 4 time Dean's List student
                                - 6-time Vocal Music Performance Grant Awardee`}
                            />
                
            </div>
        </div>
    );
});

export default ConsoleWindow;