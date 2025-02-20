import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};
