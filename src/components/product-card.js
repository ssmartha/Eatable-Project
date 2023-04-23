import * as Styled from "../styles";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import {Wrapper2} from "./input";

const CardWrapper = styled.div`
  padding-top: 43px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 212px;
  background-color: ${colors.white.one};
  border-radius: 30px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  position: relative;
`;

const ProductImage = styled.img`
  position: absolute;
  top: -43px;
  bottom: 0px;
  right: 0px;
  left: 14px;
  width: 130px;
  height: 130px;
  border-radius: 70%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`
const ProductContent= styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  left: 0px;
  right: 0px;
`;

const Text1 = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-heigth: 27.65px;
`;

function ProductCard({ image, name, price, url, id }) {

  return (
    <CardWrapper>
      <Link to={url} style={{textDecoration: "none", color: `${colors.black.dark_charcoal}`}}>
            <ProductDetails>
              <ProductImage src={image} alt={id}/>
              <ProductContent>
                <Text1 style={{width: "156px", textAlign: "center", padding: "0px 13px"}}>{name.charAt(0).toUpperCase()+ name.slice(1)}</Text1>
                <Wrapper2 style={{alignItems: "center", justifyContent:"center", gap: "1px"}}>
                  <FontAwesomeIcon 
                  icon={faDollar} 
                  size="xs" 
                  style={{color: `${colors.orange.orioles_orange}`, height: "20px", paddingTop:"6px"}} />

                  <Text1 style={{color: `${colors.orange.orioles_orange}`, height: "28px"}}>{price}</Text1>
                </Wrapper2>
              </ProductContent>
            </ProductDetails>
        </Link>
    </CardWrapper>
  );
}

export default ProductCard;
