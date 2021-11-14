import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Header from "../components/Header";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name, picture, email } = user;

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Header />
        <img
          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          src={picture}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  );
};

export default Profile;
