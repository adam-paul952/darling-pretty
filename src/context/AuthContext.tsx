import React from "react";

const AuthContext = React.createContext({});

const initialState = {};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = React.useState({});
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {};

export { AuthProvider, useAuthContext };
