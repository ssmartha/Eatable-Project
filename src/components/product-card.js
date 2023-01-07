import * as Styled from "../styles";
import styled from "@emotion/styled";

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100px;
  height: 150px;
  background-color: pink;
`;

function ProductCard({ id, name, price }) {

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
