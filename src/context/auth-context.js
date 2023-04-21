import { createContext, useContext, useEffect, useState } from "react";
import * as orderServices from "../services/order-services";
import * as authServices from "../services/auth-services";
import * as userServices from "../services/user-services";
import * as productServices from "../services/product-services";
import { productsKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [showEntryOption, setShowEntryOption] = useState('login');
  const [user, setUser] = useState(null);
  const [productsList, setProductsList] = useState(null);
  const [userFound, setUserFound] = useState(null);
  const [currentPage, setCurrentPage] = useState("");
  const [iconClickedStatus, setIconClickedStatus] = useState("");
  const [cartData, setCartData] = useState(null);
  const [ordersHistory, setOrdersHistory]= useState(null);
  const [totalCurrentOrder, setTotalCurrentOrder] = useState(0);
  const [state, setState] = useState({
    status: "show-products", // success - error - pending
    data: null,
    error: null,
  });


  useEffect((state, currentPage, cartData) => {
    userServices.getUser().then(setUser).catch(console.log);
    setState({ ...state, status: "show-products" });

  }, [currentPage]);


  function login(credentials) {
    authServices.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    authServices.logout().then(() => setUser(null));
  }

  function signup(newCredentials) {
    userServices.createUser(newCredentials).then(setUser).catch(console.log);
  }

  const value = {
    user,
    setUser,
    currentPage,
    setCurrentPage,
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
