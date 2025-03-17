import React, { useState, useEffect } from "react";
import "./ExperiencePost.css";

const ExperiencePost = ({ id, image, title, subtitle, body }) => {
const storageKey = `liked-${id}`;
const [likes, setLikes] = useState(() => {
    return parseInt(localStorage.getItem(`likes-${id}`)) || 0;
});

const [liked, setLiked] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
});

useEffect(() => {
    localStorage.setItem(`likes-${id}`, likes);
}, [likes, id]);

const handleLike = () => {
    if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
        localStorage.setItem(storageKey, "true");

        const button = document.getElementById(`like-btn-${id}`);
        button.classList.add("liked");

        setTimeout(() => {
            button.classList.remove("liked");
        }, 250);
    } else {
        setLikes(likes-1);
        setLiked(false);
        localStorage.removeItem(storageKey);

        const button = document.getElementById(`like-btn-${id}`);
        button.classList.add("unliked");

        setTimeout(() => {
            button.classList.remove("unliked");
        }, 200);
    }
};

return (
    <div className="experience-post">
        <img src={image} alt="Profile" className="profile-image" />
        <div className="post-content">
            <h2 className="post-title">{title}</h2>
            <h3 className="post-subtitle">{subtitle}</h3>
        
        {/* Render body as a list */}
        <ul className="post-body">
            {body.map((point, index) => (
            <li key={index}>{point}</li>
            ))}
        </ul>

        <button id={`like-btn-${id}`} className="like-button" onClick={handleLike}>
        ‪‪❤︎‬ {likes}
        </button>
        </div>
    </div>
    );
};

export default ExperiencePost;
