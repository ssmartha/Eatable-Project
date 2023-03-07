import { useState, useEffect } from "react";
import { Input, StyledButton, StyledForm } from "../components/input";
import * as userServices from "../services/user-services";
import { useAuth } from "../context/auth-context";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 300px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const WhiteWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 12px 10px;
`;

function ShowProfilePage () {

  const { user, setCurrentPage, logout } = useAuth();
  setCurrentPage("ShowProfilePage");

  function handleLogout(event) {
      event.preventDefault();

      logout();
  }

    return (
      <div style={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", marginTop: "33px"}}>
        <MainContainer>
            <div style={{ display: "flex", flexDirection: "row", gap: "88px",
                     justifyContent: "left", alignItems: "left"}}>
              <Link to="/products"> <AiOutlineLeft/> </Link>
              <p>My profile</p>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "88px",
                     justifyContent: "left", alignItems: "left", marginTop: "18px"}}>
              <p>Personal details</p>
              <Link to="/update-profile"> change </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "45px", marginBottom: "200px"}}>
              <WhiteWrapper>
                <p> {user.name} </p>
                <p> {user.email} </p>
                <p> {user.phone} </p>
                <p> {user.address} </p>
              </WhiteWrapper>

              <WhiteWrapper>
                <div style={{ display: "flex", flexDirection: "row", gap: "200px",
                      justifyContent: "center", alignItems: "center"}}>
                    <p> History </p>
                    <AiOutlineRight/>
                  </div>
              </WhiteWrapper>
            </div>

            <ButtonWrapper>
              <StyledButton onClick={handleLogout}>Logout</StyledButton>
            </ButtonWrapper>
        </MainContainer>
      </div>
      );
}

export default ShowProfilePage;
