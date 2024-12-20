import { useState, useContext, createContext } from "react";
import decode from "../utils/decode";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (token) => {
    const currentUser = decode(token);
    setToken(token);
    setUser(currentUser);
    console.log(token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
