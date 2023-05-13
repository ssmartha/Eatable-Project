import { createContext, useContext, useEffect, useState } from "react";
import * as authServices from "../services/auth-services";
import * as userServices from "../services/user-services";
import { cartKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [showEntryOption, setShowEntryOption] = useState('login');
  const [user, setUser] = useState(null);
  const [productsList, setProductsList] = useState(null);
  const [userFound, setUserFound] = useState(null);
  const [referencePage, setReferencePage] = useState("");
  const [iconClickedStatus, setIconClickedStatus] = useState("");
  const [cartData, setCartData] = useState(JSON.parse(sessionStorage.getItem(cartKey))? JSON.parse(sessionStorage.getItem(cartKey)): null);
  const [ordersHistory, setOrdersHistory]= useState(null);
  const [totalCurrentOrder, setTotalCurrentOrder] = useState(0);
  const [state, setState] = useState({
    status: "show-products", // success - error - pending
    data: null,
    error: null,
  });

  useEffect((state) => {
    userServices.getUser().then(setUser).catch(console.log);
    setState({ ...state, status: "show-products" });

  }, [referencePage]);


  function login(credentials) {
    authServices.login(credentials).then(setUser).catch(()=> setUser(null));
  }

  function logout() {
    authServices.logout().then(() => setUser(null));
  }

  function signup(newCredentials) {
    userServices.createUser(newCredentials).then(setUser).catch(()=> setUser(null));
  }

  const value = {
    user,
    setUser,
    referencePage,
    setReferencePage,
    productsList,
    setProductsList,
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
    cartData,
    setCartData,
    totalCurrentOrder,
    setTotalCurrentOrder,
    ordersHistory,
    setOrdersHistory
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
