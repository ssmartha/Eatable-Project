import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "./context/auth-context";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors } from "./styles";
import { StyledDivForm } from "./components/input"

const LoginOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const SignupOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

function UnauthenticatedApp() {
  const { showEntryOption, setShowEntryOption } = useAuth();

  return (
    <div style={{marginTop: "80px"}}>
      <div>
          <Wrapper>
            <img
            src={require("./assets/images/eatable-logo.png")}
            alt="eatable logo"
            style={{ height: "60px" }}
            />
            <p style={{ textAlign: "center",  fontSize: "12px", color: "#FA4A0C"  }}> Food for everyone </p>
          </Wrapper>

          <OptionsContainer>
            <LoginOption onClick={() => setShowEntryOption( 'login' )}> Login </LoginOption>
            <SignupOption onClick={() => setShowEntryOption( 'signup' )}> Signup</SignupOption>
          </OptionsContainer>
        </div>

      <StyledDivForm>
          {showEntryOption ==='login' ? <LoginForm /> : <SignupForm />}
      </StyledDivForm>
    </div>
  );
}

export default UnauthenticatedApp;
