import { createContext, useContext, useEffect, useState } from "react";
import { getFavorites } from "../services/favorites-service";
import * as authServices from "../services/auth-services";
import * as userServices from "../services/user-services";

const AuthContext = createContext();

function AuthProvider(props) {
  const [showEntryOption, setShowEntryOption] = useState("login");
  const [user, setUser] = useState(null);
  const [userFound, setUserFound] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [iconClickedStatus, setIconClickedStatus] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });

  useEffect(() => {
    userServices.getUser().then(setUser).catch(console.log);
  }, []);

  useEffect(() => {
    getFavorites().then((data) => {
      setFavorites([...data])
  }).catch(console.log);
  }, [currentPage]);

  function login(credentials) {
    console.log("credentials:", credentials)
    authServices.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    authServices.logout().then(() => setUser(null));
  }

  function signup(userData) {
    console.log("userData:", userData)
    userServices.createUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    user,
    favorites,
    setFavorites,
    currentPage,
    setCurrentPage,
    userFound,
    setUserFound,
    state,
    setState,
    iconClickedStatus,
    setIconClickedStatus,
    login,
    logout,
    signup,
    showEntryOption,
    setShowEntryOption,
    formData,
    setFormData
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
