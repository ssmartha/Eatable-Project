import { useState, useEffect } from "react";
import { Input, StyledButton, StyledForm } from "../components/input";
import * as userServices from "../services/user-services";
import { useAuth } from "../context/auth-context";

function ProfilePage () {

  const { email, name, phone, address } = useAuth().user;
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({
        email: email,
        name: name,
        phone: phone,
        address: address,
    });


    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
      event.preventDefault();
      userServices.update(formData);
      setUser(formData);
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

            <div>
              <p> Email </p>
              <p> {formData.email} </p>
            </div>

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
