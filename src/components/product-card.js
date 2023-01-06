import * as Styled from "../styles";
import styled from "@emotion/styled";

const StyledCardDetails = styled.div`
  display: flex;
  direction: column;
  gap: 3px;
`;

function ProductCard({ id, name, price }) {
  console.log("inside product cardddddddd",id,name,price);
  return (
    <>
      <StyledCardDetails>
        <p>{ name }</p>
        <p>{ price }</p>
      </StyledCardDetails>
    </>
  );
}

export default ProductCard;
