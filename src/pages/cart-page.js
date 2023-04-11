import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {AiOutlineLeft} from "react-icons/ai"
import {Wrapper1, Wrapper2} from "../components/input"
import { StyledButton } from "../components/input";
import { useAuth } from "../context/auth-context";
import CartProduct from "../components/cart-product";

const Text1 = styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 27.65px;
`;

const Text2 = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22.63px;
`;

const Text3 = styled.p`
    font-weight: 600;
    font-size: 28px;
    line-height: 35.2px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap:31px;
`;

function CartPage() {

  const {cartData, setCartData} = useAuth();
  console.log("CARTDATA IN CARTPAGE !!! 38!!",cartData);

  return (
    <Wrapper1 style={{marginTop:"33px", alignItems:"center"}}>
      <MainContainer>
          <Wrapper2 style={{gap:"132px", alignItems:"center", justifyContent:"left", marginBottom:"9px"}}>
            <Link to="/products"><AiOutlineLeft/></Link>
            <Text1>Cart</Text1>
          </Wrapper2>

          {cartData?
          <>
            <Wrapper1 style={{justifyContent:"center", alignItems:"center", gap:"20px"}}>
              {cartData.map((product) => (
                <CartProduct 
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                />
              ))}
            </Wrapper1>
            <Wrapper2 style={{gap:"199px"}}>
              <Text2>Total</Text2>
              <Text3>$97.90</Text3>
            </Wrapper2>

            <StyledButton style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link to="/checkout"> Checkout </Link>
            </StyledButton>
          </>
          :
           <p>No hay productos en el carrito</p>
           }

      </MainContainer>
    </Wrapper1>
  );
}

export default CartPage;
