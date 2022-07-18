import React from "react";

interface IAuthContext {
  authState: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext({} as IAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = React.useState(false);

  const login = async () => {
    setAuthState(true);
  };

  const logout = async () => {
    setAuthState(false);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw Error("Context must be used in a provider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
