import { createContext, useContext, useEffect, useState } from "react";
import { getFavorites } from "../services/order-services";
import * as authServices from "../services/auth-services";
import * as userServices from "../services/user-services";
import * as productServices from "../services/product-services";
import { productsKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [showEntryOption, setShowEntryOption] = useState("login");
  const [user, setUser] = useState(null);
  const [chennie, setChennie] = useState([]);
  const [productsList, setProductsList] = useState(null);
  const [userFound, setUserFound] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [iconClickedStatus, setIconClickedStatus] = useState("");
  const [state, setState] = useState({
    status: "show-products", // success - error - pending
    data: null,
    error: null,
  });

  console.log("state in authhhhhhhhhhhhhhhhhhh 23 with data", state)
  // productServices.getProducts().then(setUserFound).catch(console.log);

  // useEffect(() => {
  //   productServices.getProducts().then(setUserFound).catch(console.log);
  //   console.log("se termino de setear data! SINGLE!!!");
  // }, []);

  useEffect((state) => {
    userServices.getUser().then(setUser).catch(console.log);
    setState({ ...state, status: "show-products" });
    // const productsList = JSON.parse(sessionStorage.getItem(productsKey));
    // const allProducts = Object.values(productsList);
    // console.log("sessionStorage productsssssssss", productsList, typeof productsList);
    // console.log("sessionStorage allProductsssssss", allProducts, typeof allProducts);
  }, [currentPage]);


  function login(credentials) {
    console.log("credentials:", credentials)
    authServices.login(credentials).then(setUser).catch(console.log);
    // productServices.getProducts().then(setUserFound).catch(console.log);
  }

  function logout() {
    authServices.logout().then(() => setUser(null));
  }

  function signup(newCredentials) {
    console.log("newCredentials:", newCredentials)
    userServices.createUser(newCredentials).then(setUser).catch(console.log);
    // productServices.getProducts().then(setUserFound).catch(console.log);
  }

  console.log("useeeeeeeeeeeer", user);
  // console.log("user dataaaaaaaaa", userData)

  const value = {
    user,
    setUser,
    favorites,
    setFavorites,
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
    chennie,
    setChennie
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
