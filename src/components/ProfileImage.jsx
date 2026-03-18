import React from 'react';
import './ProfileImage.css';

const ProfileImage = () => {
  return (
    <div className="profile-image-container">
      
      <div className="image-wrapper">
        <img 
          src="https://oddhcouxezvvdqnbpncp.supabase.co/storage/v1/object/public/profile-landing-page/IMG_1602.JPG" 
          alt="Ryan Errando" 
          className="profile-photo" 
        />
      </div>
    </div>
  );
};

export default ProfileImage;
