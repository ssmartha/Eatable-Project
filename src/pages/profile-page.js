import { useState } from "react";
import { Input, StyledButton, StyledForm } from "../components/input";
import { update } from "../services/user-services";
import { useAuth } from "../context/auth-context";

function ProfilePage () {

    const { email, first_name, last_name } = useAuth().user;
    const [formData, setFormData] = useState({
        email: email,
        password: "",
        first_name: first_name,
        last_name: last_name,
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        update(formData);
    }

    return (
        <div>
          <StyledForm onSubmit={handleSubmit} style={{marginTop: "50px",}}>
            <Input
              name="name"
              type="name"
              value={formData.name}
              onChange={handleChange}
              label="Name"
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
            />
            <Input
              name="phone"
              type="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Phone"
            />
            <Input
              name="address"
              type="address"
              value={formData.address}
              onChange={handleChange}
              label="Address"
            />
            <StyledButton type="submit">Update</StyledButton>
          </StyledForm>
        </div>
      );
}

export default ProfilePage
