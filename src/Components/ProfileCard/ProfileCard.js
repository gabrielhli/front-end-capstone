import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ProfileCard.css';

const ProfileCard = ({ profileName }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
        <button className="profile-card-btn" onClick={handleOpen}>Welcome, {profileName}</button>
        {open ? (
            <div className="profile-card-container">
                    <p><Link to="/profile">Your Profile</Link></p>
                    <p><Link to="/reports">Your Reports</Link></p>
            </div>
        ) : null}
        </div>
    );
};

export default ProfileCard;