import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledButton, StyledForm } from "./input";

// { onSignup }
function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("insideHnadleChangeeee",formData);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("insideHnadleSubmit",formData)
    signup(formData);
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
        <StyledButton type="submit">Sign-up</StyledButton>
      </StyledForm>
    </div>
  );
}

export default SignupForm;
