import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Header from "../components/Header";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name, picture, email } = user;

  if (isLoading) {
    return <Loading />;
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
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    )
  );
};

export default Profile;
