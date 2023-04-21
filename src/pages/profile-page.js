import styled from "@emotion/styled";
import * as userServices from "../services/user-services";
import { useAuth } from "../context/auth-context";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, StyledButton, StyledForm } from "../components/input";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import UpdateDetails from "../components/update-details";
import { colors } from "../styles";

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
  background-color: ${colors.white.one};
  border-radius: 20px;
  padding: 12px 10px;
`;

function ProfilePage () {
  const { user, logout } = useAuth();
  const [ profileState, setProfileState] = useState("show-profile-details");

  function handleLogout(event) {
      event.preventDefault();

      logout();
  }

    return (
      <div style={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", marginTop: "33px"}}>
        <MainContainer>
            <div style={{ display: "flex", flexDirection: "row", gap: "88px",
                     justifyContent: "left", alignItems: "left"}}>
              {profileState === "show-profile-details"? 
                <Link to="/products"> <AiOutlineLeft/> </Link>
                :
                <AiOutlineLeft onClick={()=> setProfileState("show-profile-details")}/>
              }
              <p>My profile</p>
            </div>

            {profileState === "show-profile-details"? 
              <div style={{ display: "flex", flexDirection: "row", gap: "88px",
                      justifyContent: "left", alignItems: "left", marginTop: "18px"}}>
                <p>Personal details</p>
                <p onClick={()=> setProfileState("change-profile-details")}> change </p>
              </div> : 
              <div style={{ marginTop: "18px", marginBottom: "15px"}}>
                <p>Update personal details</p>
              </div>              
            }

            {profileState === "show-profile-details"?
            <>
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
                      <Link to="/history"><AiOutlineRight/></Link>
                    </div>
                </WhiteWrapper>
              </div>
              
              <ButtonWrapper>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </ButtonWrapper>
            </>
              :
              <UpdateDetails/>
            }
        </MainContainer>
      </div>
      );
}

export default ProfilePage;
