import { useState, useEffect } from "react";
import { Input, StyledButton, StyledForm } from "../components/input";
import * as userServices from "../services/user-services";
import { useAuth } from "../context/auth-context";
import { Link } from "react-router-dom";

function ShowProfilePage () {

  const { user, setCurrentPage, logout } = useAuth();

  console.log("user1", user);
  setCurrentPage("ShowProfilePage");

  function handleLogout(event) {
      event.preventDefault();

      logout();
  }

    return (
      <div>
          <p>My profile</p>
          <p>Personal details</p>

          <Link to="/update-profile"> change </Link>
          <p> {user.name} </p>
          <p> {user.email} </p>
          <p> {user.phone} </p>
          <p> {user.address} </p>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>

        </div>
      );
}

export default ShowProfilePage;
