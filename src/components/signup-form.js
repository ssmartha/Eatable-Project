import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledButton, StyledForm } from "./input";
import { getProducts } from "../services/product-services";


function SignupForm() {
  const { signup } = useAuth();
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

    getProducts().then().catch(console.log);
    signup(formData);
  }

  return (
      <StyledForm onSubmit={handleSubmit} style={{ gap: "60px", marginTop:"48px"}}>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="my_mail@mail.com"
          label="Email address"
          from="entry"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="**********"
          label="Password"
          from="entry"
        />
        <StyledButton type="submit">Sign-up</StyledButton>
      </StyledForm>
  );
}

export default SignupForm;
