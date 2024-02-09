import React from 'react';
import ProfilePage from '../component/profile-c';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'john@example.com',
    profileImage: require('../assets/laptop.png'),
  };

  return (
    <ProfilePage
      name={user.name}
      phoneNumber={user.phoneNumber}
      email={user.email}
      profileImage={user.profileImage}
    />
  );
};

export default UserProfile;
