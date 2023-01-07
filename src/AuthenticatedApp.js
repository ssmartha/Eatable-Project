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
import UpdateProfilePage from "./pages/updateprofile-page";
import ShowProfilePage from "./pages/showprofile-page";
import HistoryPage from "./pages/history-page";
import { VscHome } from "react-icons/vsc";
import { BsFillStarFill, BsPersonFill } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
// import { RiSearchFill } from "react-icons/ri";
import { useAuth } from "./context/auth-context";
import * as productServices from "./services/product-services";



function AuthenticatedApp() {

  productServices.getProducts().then((event)=> console.log(Object.values(event))).catch(console.log);

  const Footer = () => (
  <nav style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", background: "#F2F2F2", boxShadow: "0px -2px 0px rgba(0, 0, 0, 0.25)", width: "100%", height: "68px", position: "absolute", bottom: "1px", right:"0"}}>
    <Link to="/home"> {<VscHome style={{width: "45px", height: "45px", color: "#BDBDBD"}} />} </Link>
    <Link to="/show-profile">  {<BsPersonFill style={{width: "45px", height: "45px", color: "#BDBDBD"}} />} </Link>
    <Link to="/history"> {<BiHistory style={{width: "45px", height: "45px", color: "#BDBDBD"}} />} </Link>
  </nav>
  );

  function ShowProfile() {
    return (
      <div>
        <ShowProfilePage />
      </div>
    );
  }

  function UpdateProfile() {
    return (
      <div>
        <UpdateProfilePage />
      </div>
    );
  }

  function Home() {
    return (
      <div>
        <HomePage/>
      </div>
    );
  }

  function History() {
    return (
      <div>
        <HistoryPage/>
      </div>
    );
  }

  function Cart() {
    return (
      <div>
        <p> Cart Page </p>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/show-profile" element={<ShowProfile />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<UpdateProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AuthenticatedApp;
