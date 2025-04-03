import React, { useState, useEffect } from "react";
import "./ExperiencePost.css";

const ExperiencePost = ({ id, image, title, subtitle, body, tags = [] }) => {
    const storageKey = `liked-${id}`;
    const [likes, setLikes] = useState(() => {
        return parseInt(localStorage.getItem(`likes-${id}`)) || 0;
});

const [liked, setLiked] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
});

const [pop, setPop] = useState(false);

useEffect(() => {
    localStorage.setItem(`likes-${id}`, likes);
}, [likes, id]);

const handleLike = () => {
    setPop(true);  // Apply pop effect
    setTimeout(() => setPop(false), 250); // Remove pop effect after animation

    if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
        localStorage.setItem(storageKey, "true");
    } else {
        setLikes(likes - 1);
        setLiked(false);
        localStorage.removeItem(storageKey);
    }
};

return (
    <div className="experience-post">
        <div className="post-content">

            <h2 className="post-title">{title}</h2>
            <h3 className="post-subtitle">{subtitle}</h3>
            
            {/* Render body as a list */}
            <ul className="post-body">
                {body.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <div className ="tags">
            <button 
                id={`like-btn-${id}`} 
                className={`like-button ${liked ? "liked" : ""} ${pop ? "pop" : ""}`} 
                onClick={handleLike}
            >
                ‪‪❤︎‬ {likes}
            </button>

                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        #{tag}
                    </span>
                ))}
            </div>
            
        </div>
    </div>
);
};

export default ExperiencePost;
