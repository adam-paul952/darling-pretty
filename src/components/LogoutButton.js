import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <Button onClick={() => logout({ returnTo: "http://localhost:3001" })}>
        Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;
