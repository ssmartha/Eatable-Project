import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {AiOutlineLeft} from "react-icons/ai"
import {Wrapper1, Wrapper2} from "../components/input"
import { StyledButton } from "../components/input";
import { useAuth } from "../context/auth-context";
import CartProduct from "../components/cart-product";
import { update } from "../services/user-services";
import NotFound from "../components/not-found";

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

  const {cartData, setCartData, setTotalCurrentOrder, totalCurrentOrder} = useAuth();

  if (cartData){
    const cartDataCopy = [...cartData];

    const total = cartDataCopy.reduce((acum, product)=>{
      return acum + product.quantity * product.price
    }, 0);

    setTotalCurrentOrder(total);
  }

  function increaseQuantity(id){
    const index = cartData.findIndex(product => product.id === id)

    if(index !== -1){
      const updatedQuantityInCartData = [...cartData];
      updatedQuantityInCartData[index] = {...updatedQuantityInCartData[index], quantity: updatedQuantityInCartData[index].quantity+1};
      setCartData(updatedQuantityInCartData);
    }
  }

  function decreaseQuantity(id){
    const index = cartData.findIndex(product => product.id === id)

    if(index !== -1 && cartData[index].quantity > 0){
      const updatedQuantityInCartData = [...cartData];
      updatedQuantityInCartData[index] = {... updatedQuantityInCartData[index], quantity: updatedQuantityInCartData[index].quantity-1};
      setCartData(updatedQuantityInCartData);
    }

    if(cartData[index].quantity === 1 ){
      let updatedCartDataList = [...cartData];
      updatedCartDataList = updatedCartDataList.filter(product => product.id !== id)
      setCartData(updatedCartDataList);
    }
  }

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
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
              ))}
            </Wrapper1>
            <Wrapper2 style={{gap:"199px"}}>
              <Text2>Total</Text2>
              <Text3>{totalCurrentOrder}</Text3>
            </Wrapper2>

            <StyledButton style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link to="/checkout"> Checkout </Link>
            </StyledButton>
          </>
          :
           <NotFound item={"products in cart"}/>
           }

      </MainContainer>
    </Wrapper1>
  );
}

export default CartPage;
