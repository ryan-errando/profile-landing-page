import React from 'react';
import './ProfileImage.css';
import profilePic from '../assets/profile_pic.png';
import blueCircle from '../assets/blue_circle.png';

const ProfileImage = () => {
  return (
    <div className="profile-image-container">
      {/* Outer static ring matching the image perfectly */}
      <img src={blueCircle} alt="Circle Border" className="circular-dash-ring" />
      
      <div className="image-wrapper">
        <img 
          src={profilePic} 
          alt="Ryan Errando" 
          className="profile-photo" 
        />
      </div>
    </div>
  );
};

export default ProfileImage;
