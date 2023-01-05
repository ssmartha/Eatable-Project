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

const OptionsContainer = styled.div`
  margin: 0px;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
`;

function UnauthenticatedApp() {
  const { showEntryOption, setShowEntryOption } = useAuth();

  return (
    <StyledDivForm>
      <div>
        <p style={{ textAlign: "center" }}> EATABLE</p>
        <p style={{ textAlign: "center" }}> Food for everyone </p>

        <OptionsContainer>
          <LoginOption onClick={() => setShowEntryOption( 'login' )}> Login </LoginOption>
          <SignupOption onClick={() => setShowEntryOption( 'signup' )}> Signup</SignupOption>
        </OptionsContainer>
      </div>


      {showEntryOption ==='login' ? <LoginForm /> : <SignupForm />}

    </StyledDivForm>
  );
}

export default UnauthenticatedApp;
