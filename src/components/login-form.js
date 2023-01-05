import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledButton, StyledForm } from "./input";

function LoginForm() {
  const { login, formData, setFormData } = useAuth();
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(formData);
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
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </div>
  );
}

export default LoginForm;
