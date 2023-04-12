import { useState, useEffect } from "react";
import { Input, StyledButton, StyledForm } from "./input";
import * as userServices from "../services/user-services";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 300px;
`;

const WhiteWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 12px 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

function UpdateDetails ({updateMainState, newMainState}) {

  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
  });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
      event.preventDefault();

      userServices.update(formData).then(setUser).catch(console.log);
      updateMainState(newMainState);
    }

    return (
             <div style={{ display: "flex", flexDirection: "column", marginBottom: "170px"}}>
                  <StyledForm onSubmit={handleSubmit} style={{}}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "170px"}}>
                      <WhiteWrapper>
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
                      </WhiteWrapper>

                      <ButtonWrapper>
                        <StyledButton type="submit">Update</StyledButton>
                      </ButtonWrapper>
                    </div>
                  </StyledForm>
             </div>
      );
}

export default UpdateDetails;
