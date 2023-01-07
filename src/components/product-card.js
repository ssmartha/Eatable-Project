import * as Styled from "../styles";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

function ProductCard({ image, name, price, url, id }) {

  return (
    <>
      <Link to={url}>
        <StyledCardDetails>
          <p>{ name }</p>
          <p>{ price }</p>
        </StyledCardDetails>
      </Link>
    </>
  );
}

export default ProductCard;
