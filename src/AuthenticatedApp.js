import { useState, useEffect } from "react";
import React from "react";
import {
  BrowserRouter, // Para declarar rutas => el padre de todas las rutas
  Routes, // Se ocupan de listar las rutas independientes.
  Route, // Para declarar una ruta
  Link, // Para navegar entre las rutas
  useParams,
} from "react-router-dom";
import HomePage from "./pages/home-page";
// import UpdateProfilePage from "./pages/updateprofile-page";
import ProfilePage from "./pages/profile-page";
import HistoryPage from "./pages/history-page";
import { VscHome } from "react-icons/vsc";
import { BsFillStarFill, BsPersonFill } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
// import { RiSearchFill } from "react-icons/ri";
import { useAuth } from "./context/auth-context";
import * as productServices from "./services/product-services";
import ShowProduct from "./components/show-product";
import CartPage from "./pages/cart-page";
import CheckoutPage from "./pages/checkout-page";
import { colors } from "./styles";



function AuthenticatedApp() {

  productServices.getProducts().then((event)=> console.log(Object.values(event))).catch(console.log);

  const Footer = () => (
    <nav 
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      background: `${colors.white.anti_flash_white}`,
      width: "100%",
      height: "68px",
      position: "fixed",
      bottom: "0",
      }}>
        <Link to="/products"> {<VscHome style={{width: "45px", height: "45px", color: `${colors.gray.two}`}} />} </Link>
        <Link to="/show-profile">  {<BsPersonFill style={{width: "45px", height: "45px", color: `${colors.gray.two}`}} />} </Link>
        <Link to="/history"> {<BiHistory style={{width: "45px", height: "45px", color: `${colors.gray.two}`}} />} </Link>
    </nav>
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/profile" element={<ProfilePage />} />

          <Route path="/products">
            <Route index element={<HomePage />} />
            <Route path=":id" element={<ShowProduct/>} />
          </Route>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="*" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AuthenticatedApp;
