import styled from "@emotion/styled";
import { colors } from "../styles";

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  border: none;
  text-align: left;
  width: 314px;
  height: 28px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22.63px;
  background: ${colors.background};
  border-bottom: 1px solid ${colors.black.dark_charcoal};
  padding-bottom: 5px;
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.p`
  color: ${colors.gray.one};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
`

export const StyledButton = styled("button")`
  width: 100%;
  height: 70px;
  border: none;
  background: ${colors.orange.orioles_orange};
  border-radius: 30px;
  color: ${colors.white.one}
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`;

export const StyledDivForm = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <StyledDiv>
      {label && <label htmlFor={id || name}><StyledLabel>{label}</StyledLabel></label>}
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
}

