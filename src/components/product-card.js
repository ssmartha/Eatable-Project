import * as Styled from "../styles";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  height: 150px;
  background-color: #FFFFFF;
  border-radius: 30px;
`;

function ProductCard({ image, name, price, url, id }) {

  return (
    <>
      <Link to={url}>
        <StyledCardDetails>
          <img src={image} alt={id} style={{ width: "120px", height: "120px", borderRadius: "70%", marginTop: "1px", }} />
          <h3 style={{ fontSize: "12px", textAlign: "center" }}>{name}</h3>
          <p style={{ fontSize: "12px", color: "#FA4A0C" }}>${price}</p>
        </StyledCardDetails>
      </Link>
    </>
  );
}

export default ProductCard;
