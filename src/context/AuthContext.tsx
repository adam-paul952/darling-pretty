import React from "react";

const AuthContext = React.createContext({});

const useAuthContext = () => {
  const [authState, setAuthState] = React.useState(true);

  const login = () => {
    return new Promise<boolean>((res) => {
      setAuthState((prevState) => !prevState);
      res(true);
    });
  };

  const logout = () => {
    setAuthState(false);
  };

  return { authState, login, logout };
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthContext();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
