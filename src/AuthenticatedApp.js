import React from "react";
import {
  BrowserRouter, // Para declarar rutas => el padre de todas las rutas
  Routes, // Se ocupan de listar las rutas independientes.
  Route, // Para declarar una ruta
} from "react-router-dom";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import HistoryPage from "./pages/history-page";
import ShowProduct from "./components/show-product";
import CartPage from "./pages/cart-page";
import CheckoutPage from "./pages/checkout-page";
import Footer from "./components/footer";
import "./index.css"

function AuthenticatedApp() {

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
