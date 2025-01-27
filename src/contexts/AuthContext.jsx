import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const setToken = (token) => {
    setAccessToken(token);
  };

  const clearToken = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};