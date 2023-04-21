import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "./context/auth-context";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { StyledDivForm, Wrapper1} from "./components/input";
import { colors } from "./styles";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  width: 157px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: ${props=> props.showEntryOption === 'login'? `3px solid ${colors.orange.orioles_orange}`: `3px solid ${colors.white.one}`}
`;

const SignupOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  width: 157px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: ${props=> props.showEntryOption=== 'signup'? `3px solid ${colors.orange.orioles_orange}`: `3px solid ${colors.white.one}`}
`;


function UnauthenticatedApp() {
  const { showEntryOption, setShowEntryOption } = useAuth();

  return (
    <div>
      <Wrapper1 style={{backgroundColor: `${colors.white.one}`, paddingTop: "145px",
      gap: "119px", borderRadius:"30px", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.06)"}}>
          <Wrapper1 style={{alignItems: "center", justifyContent: "center", gap: "12px"}}>
              <img
              src={require("./assets/images/eatable-logo.png")}
              alt="eatable logo"
              style={{ height: "60px" }}
              />
              <p style={{ textAlign: "center",  fontSize: "12px", color:`${colors.orange.orioles_orange}` }}> Food for everyone </p>
          </Wrapper1>

          <OptionsContainer>
            <LoginOption showEntryOption={showEntryOption} onClick={() => setShowEntryOption( 'login' )}> Login </LoginOption>
            <SignupOption showEntryOption={showEntryOption} onClick={() => setShowEntryOption( 'signup' )}> Signup</SignupOption>
          </OptionsContainer>
      </Wrapper1>

      <StyledDivForm>
          {showEntryOption ==='login' ? <LoginForm /> : <SignupForm />}
      </StyledDivForm>
    </div>
  );
}

export default UnauthenticatedApp;
