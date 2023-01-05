import { useState } from "react";
import React from "react";
import {
  BrowserRouter, // Para declarar rutas => el padre de todas las rutas
  Routes, // Se ocupan de listar las rutas independientes.
  Route, // Para declarar una ruta
  Link, // Para navegar entre las rutas
  useParams,
} from "react-router-dom";
import SearchPage from "./pages/search-page"
import ProfilePage from "./pages/profile-page";
import HistoryPage from "./pages/history-page";
import { VscHome } from "react-icons/vsc";
import { BsFillStarFill, BsPersonFill } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
// import { RiSearchFill } from "react-icons/ri";


function AuthenticatedApp() {

  const Footer = () => (
  <nav style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", background: "#F2F2F2", boxShadow: "0px -2px 0px rgba(0, 0, 0, 0.25)", width: "100%", height: "68px", position: "absolute", bottom: "1px", right:"0"}}>
    <Link to="/search"> {<VscHome style={{width: "45px", height: "45px", color: "#BDBDBD"}} />} </Link>
    <Link to="/profile">  {<BsPersonFill style={{width: "45px", height: "45px", color: "#BDBDBD"}} />} </Link>
    <Link to="/history"> {<BiHistory style={{width: "45px", height: "45px", color: "#BDBDBD"}} />} </Link>
  </nav>
  );

  function Profile() {
    return (
      <div>
        <ProfilePage />
      </div>
    );
  }

  function Search() {
    return (
      <div>
        <SearchPage/>
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
          <Route index path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AuthenticatedApp;