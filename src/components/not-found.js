import { CiSearch } from "react-icons/ci";
import styled from "@emotion/styled";


const MainWrapper= styled.p`
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledText= styled.p`
  font-weight: 600;
  font-size: 28px;
`;

export default function NotFound({ item }){
  return (
    <MainWrapper>
      <CiSearch style={{width: "180px", height: "180px"}}/>
      <StyledText>No {item} found</StyledText>
    </MainWrapper>
  )
}
