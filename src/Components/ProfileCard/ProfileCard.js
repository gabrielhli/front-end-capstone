import React, { useState } from 'react';
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
                    <p>Your Profile</p>
            </div>
        ) : null}
        </div>
    );
};

export default ProfileCard;