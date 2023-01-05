import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledButton, StyledForm } from "./input";

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

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
          value={formData.email}
          onChange={handleChange}
          placeholder="my_mail@mail.com"
          label="Email address"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
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
