import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledButton, StyledForm } from "./input";

// { onSignup }
function SignupForm() {
  const { signup, formData, setFormData } = useAuth();
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    signup(formData);
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="my_mail@mail.com"
          label="Email address"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />
        <StyledButton type="submit">Sign-up</StyledButton>
      </StyledForm>
    </div>
  );
}

export default SignupForm;
