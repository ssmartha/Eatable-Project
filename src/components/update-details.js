import { useState } from "react";
import { Input, StyledButton, StyledForm } from "./input";
import { update } from "../services/user-services";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { colors } from "../styles";

const UpdateComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 314px;
  gap: ${props => props.from === "checkout"? "150px": "170px"}
`;

const WhiteWrapper = styled.div`
  background-color: ${colors.white.one};
  border-radius: 20px;
  padding: 12px 11px 18px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
`;

const StyledEmailLabel = styled.p`
  color: ${colors.gray.one};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  width: 288px;
`;

const StyledEmailData = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 22.63px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.black.black};
  width: 288px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

function UpdateDetails ({updateMainState, newMainState, from}) {

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

      update(formData).then(setUser).catch(console.log);
      updateMainState(newMainState);
    }

    return (
            <StyledForm onSubmit={handleSubmit}>
              <UpdateComponentsWrapper from={from}>
                <WhiteWrapper>
                    <Input
                      name="name"
                      type="name"
                      value={formData.name}
                      onChange={handleChange}
                      label="Name"
                      from="profile"
                    />

                    <div style={{width: "288px"}}>
                      <StyledEmailLabel> Email </StyledEmailLabel>
                      <StyledEmailData> {formData.email} </StyledEmailData>
                    </div>

                    <Input
                      name="phone"
                      type="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      label="Phone"
                      from="profile"
                      width="288px"
                    />
                    <Input
                      name="address"
                      type="address"
                      value={formData.address}
                      onChange={handleChange}
                      label="Address"
                      from="profile"
                      width="288px"
                    />
                </WhiteWrapper>

                <ButtonWrapper>
                  <StyledButton type="submit">Update</StyledButton>
                </ButtonWrapper>
              </UpdateComponentsWrapper>
            </StyledForm>
      );
}

export default UpdateDetails;
