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

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`;

const StyledLabel = styled.p`
  color: ${colors.gray.one};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
`

const StyledInput = styled.input`
  border: none;
  text-align: left;
  height: 23px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 22.63px;
  ${props => props.from === "entry" ? 
    `
    background-color: ${colors.background};
    padding-bottom: 5px;
    border-bottom: 1px solid ${colors.black.black};
    ` 
    :
    props.from === "query"?
    `
    background-color: ${colors.background};
    `
    :
    props.from === "profile"?
    `
    width: 288px;
    background-color: ${colors.white.one};
    padding-bottom: 5px;
    border-bottom: 1px solid ${colors.black.black};
    `
    :
    `
    width: 232px;
    background-color: ${colors.white.one};
    padding-bottom: 7px;
    border-bottom: 1px solid ${colors.black.black};
    `
  }

  &::placeholder {
    color: ${colors.gray.one} !important; 
    font-family: 'Inter'
  }
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled("button")`
  width: 100%;
  height: 70px;
  border: none;
  background-color: ${colors.orange.orioles_orange};
  border-radius: 30px;
  color: ${colors.white.one}
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

export const StyledDivForm = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  from
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
        from={from}
      />
    </StyledDiv>
  );
}

