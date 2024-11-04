import React from 'react';
import profileImage from '../assets/profile.png'; // Importa la imagen desde la carpeta assets

const ProfilePhoto = () => {
  return (
    <img
      src={profileImage}
      alt="Profile"
      style={{ width: '200px', borderRadius: '50%' }}
    />
  );
};

export default ProfilePhoto;
