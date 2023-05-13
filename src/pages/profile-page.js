import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton, Wrapper1 } from "../components/input";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import UpdateDetails from "../components/update-details";
import { colors } from "../styles";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 314px;
`;

const WhiteWrapperForDetails = styled.div`
  background-color: ${colors.white.one};
  border-radius: 20px;
  padding: 12px 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 315px;
`;

const WhiteWrapperForHistory = styled.div`
  background-color: ${colors.white.one};
  border-radius: 20px;
  padding: 19px 24px 18px 19.94px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: row;
  gap: 202.17px;
  align-items: center;
  justify-content: center;
  width: 314px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-bottom: 80px;
`;

const Text1 = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
`;

const Text2 = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`;

const Text3 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20.11px;
`;

function ProfilePage () {
  const { user, logout, setReferencePage } = useAuth();
  const [ profileState, setProfileState] = useState("show-profile-details");

  setReferencePage("profile-page");

  function handleLogout(event) {
      event.preventDefault();

      logout();
  }

    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
        <MainContainer>
            <div style={{ display: "flex", flexDirection: "row", gap: "88px",
                     justifyContent: "left", alignItems: "left"}}>
              {profileState === "show-profile-details"? 
                <Link to="/products"> <AiOutlineLeft style={{marginTop: "7px", color: `${colors.black.black}`}}/> </Link>
                :
                <AiOutlineLeft
                style={{marginTop: "7px", color: `${colors.black.black}`}}
                onClick={()=> setProfileState("show-profile-details")}/>
              }
              <Text1>My Profile</Text1>
            </div>

            {profileState === "show-profile-details"? 
              <div 
              style={{ 
              display: "flex", flexDirection: "row", gap: "88px",
              justifyContent: "space-between", alignItems: "left",
              marginTop: "34px", marginBottom: "9px"}}>
                  <Text2>Personal details</Text2>
                  <Text3 
                  onClick={()=> setProfileState("change-profile-details")}
                  style={{color: `${colors.orange.orioles_orange}`}}>
                    change 
                  </Text3>
              </div>
              : 
              <div style={{ marginTop: "34px", marginBottom: "36px"}}>
                <Text2>Update personal details</Text2>
              </div>              
            }

            {profileState === "show-profile-details"?
            <Wrapper1 style={{alignItems: "center", justifyContent: "center", width: "314px"}}>
              <div style={{ display: "flex", flexDirection: "column", gap: "45px", marginBottom: "140px"}}>
                <WhiteWrapperForDetails>
                  {user.name? <Text2>{user.name[0].toUpperCase()+ user.name.slice(1)}</Text2>: <Text2>No name found</Text2>}
                  {user.email? 
                  <Text3 
                  style={{color: `${colors.gray.one}`,
                  borderBottom: `0.5px solid ${colors.gray.one}`,
                  paddingBottom:"10px"}}>{user.email}</Text3>
                  :
                  <Text3
                  style={{color: `${colors.gray.one}`,
                  borderBottom: `0.5px solid ${colors.gray.one}`,
                  paddingBottom:"10px"}}>No email found</Text3>}
                  {user.phone? 
                  <Text3 style={{ color: `${colors.gray.one}`,
                  borderBottom: `0.5px solid ${colors.gray.one}`,
                  paddingBottom:"10px"}}>{user.phone}</Text3>
                  :
                  <Text3
                  style={{ color: `${colors.gray.one}`,
                  borderBottom: `0.5px solid ${colors.gray.one}`,
                  paddingBottom:"10px"}}>No phone found</Text3>}
                  {user.address? 
                  <Text3 style={{color: `${colors.gray.one}`}}>{user.address[0]+ user.address.slice(1)}</Text3>
                  :
                  <Text3 style={{color: `${colors.gray.one}`}}>No address found</Text3>}
                </WhiteWrapperForDetails>

                <WhiteWrapperForHistory>
                      <Text2> History </Text2>
                      <Link to="/history">
                          <AiOutlineRight style={{marginTop: "7px", color: `${colors.black.black}`}}/>
                      </Link>
                </WhiteWrapperForHistory>
              </div>
              
              <ButtonWrapper>
                <StyledButton onClick={handleLogout} style={{width: "310px"}}>Logout</StyledButton>
              </ButtonWrapper>
            </Wrapper1>
              :
              <UpdateDetails/>
            }
        </MainContainer>
      </div>
      );
}

export default ProfilePage;
