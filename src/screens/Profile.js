import React from "react";
import ProfilePage from "../components/ProfilePage";

const Profile = () => {
  const user = {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "john@example.com",
    profileImage: require("../../assets/profilePhoto/13d98ca39a742dce8ea3fe9fce8b9298.jpg"),
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

export default Profile;
