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
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });

  useEffect(() => {
    userServices.getUser().then(setUser).catch(console.log);
  }, []);

  // useEffect((userData) => {
  //   setUserData({ ...userData, email: user.email });
  // }, [user]);

  // useEffect(() => {
  //   getFavorites().then((data) => {
  //     setFavorites([...data])
  // }).catch(console.log);
  // }, [currentPage]);

  function login(credentials) {
    console.log("credentials:", credentials)
    authServices.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    authServices.logout().then(() => setUser(null));
  }

  function signup(newCredentials) {
    console.log("newCredentials:", newCredentials)
    userServices.createUser(newCredentials).then(setUser).catch(console.log);
  }

  console.log("useeeeeeeeeeeer", user);
  // console.log("user dataaaaaaaaa", userData)

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
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };