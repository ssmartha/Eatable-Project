// // import CategoryCard from "../CategoryCard";
// import PropTypes from "prop-types";
// import { Wrapper } from "../styles";
// import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
// // import ProductCard from "./product-card";
// import { productsKey } from "../config";
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import * as productServices from "../services/product-services";
// import { StyledButton } from "../components/input";
// import { Link } from "react-router-dom";
// import { CgSandClock } from "react-icons/vsc";
// import SearchState from "../components/search-state";
// import { CiSearch } from "react-icons/ci";
// import { GiSandsOfTime } from "react-icons/gi";
// import { AiOutlineLeft } from "react-icons/ai";
// import { BsCart } from "react-icons/bs";
// import { addNewOrderToCart, getCartProducts } from "../services/order-services";
// import { cartKey } from "../config";
import CartProduct from "../components/cart-product";

// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: left;
//   align-items: left;
//   background-color: pink;
//   width: 300px;
// `;

// const DetailsPageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: pink;
//   width: 300px;
// `;

// const CartProductsContainer = styled.div`
//   width: fit-content;
//   display: grid;
//   gap: 20px;
//   grid-template-rows: repeat(30, 50px);
//   justify-content:center;
//   align-items: center;
// `;

// const CardProductContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   width: 220px;
//   height: 50px;
//   background-color: white;
// `;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
`;

function CartPage() {
//   // const { id } = useParams();
//   // const { user, state, setState, cartData, setCartData, setCurrentPage} = useAuth();
//   // const [isLoading, setIsLoading] = useState(true);
//   // // const [currentProductData, setCurrentProductData] = useState(null);
//   // // const [addedToCart, setAddedToCart] = useState(false);

//   // const currentCartList = JSON.parse(sessionStorage.getItem(cartKey));
//   // console.log("XIUMINNIE CART LIST FROM SESSION STORAGE", currentCartList);
//   // console.log("XIUMINNIE CARD DATA LIST FROM SESSION STORAGE", cartData);
//   // setCurrentPage("CartPage");

//   // let initialCart = [];

//   // useEffect(() => {
//   //   productServices.getProduct(id)
//   //     .then((data) => {
//   //       setCurrentProductData(data);
//   //       setIsLoading(false);
//   //     })
//   //     .catch(console.log);
//   // }, [id]);

//     // console.log("83", cartData)
//     // if (cartData.length !== 0) {
//     //       let ordersList=  currentCartList.map(function(obj) {
//     //       return obj["order_details"].map(function(order) {
//     //         return {date: obj["created_at"], id: order["product_id"], quantity: order["quantity"], subtotal: order["subtotal"], "product_name": order["product_name"]} } )
//     //         }).reduce(function (a, b) { return a.concat(b) });
//     //     setCartData(ordersList);
//     // } else {
//     //   setCartData([]);
//     // }

//   // function handleButtonClick(currentProductData, cartData, user, id, state) {

//   //   // const newOrder = {
//   //   //   "delivery_address": user.address,
//   //   //   "items": [
//   //   //     {"id": id, "quantity": 1 }
//   //   //   ]
//   //   // }
//   //   // console.log(newOrder);
//   //   // addNewOrderToCart(newOrder).then(console.log).catch(console.log);
//   //   // let cart = cartData;
//   //   // let newCart = cart.push(currentProductData);
//   //   console.log("CHANNIE PRODUCT DATA", currentProductData, typeof currentProductData);
//   //   console.log("CHANNIE CART DATA", cartData, typeof cartData);

//   //   // initialCart.push(currentProductData)

//   //   // console.log("CHANNIE NEW CART", newCart)
//   //   // setCartData(newCart)
//   //   // setCartData({...cartData,...currentProductData, quantity: 1});
//   //   setCartData([...cartData, { ...currentProductData, quantity: 1 }]);
//   //   setAddedToCart(true);
//   // }

  return (
    <Wrapper1 style={{justifyContent:"center", alignItems:"center", marginTop:"33px"}}>
      <p> CART PAGE</p>
      <CartProduct/>
    </Wrapper1>
//     // <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginTop:"33px"}}>
//     //   <MainContainer>
//     //     <>
//     //       {/* const { status, data: queryResults, error } = state; */}
//     //       <div style={{ display: "flex", flexDirection: "row", gap: "115px",
//     //                  justifyContent: "left", alignItems: "left"}}>
//     //           <Link to="/products"> <AiOutlineLeft/> </Link>
//     //           <p>Cart</p>
//     //       </div>

//     //       <DetailsPageWrapper>
//     //         {cartData.map((cartProduct) => (
//     //           <CardProductContainer>
//     //             <p> UWU1 </p>
//     //             <div>
//     //               <p> {cartProduct} </p>
//     //             </div>
//     //             <p> UWU3</p>
//     //           </CardProductContainer>
//     //         ))}

//     //         <StyledButton style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
//     //             <Link to="/checkout"> Checkout </Link>
//     //         </StyledButton>
//     //       </DetailsPageWrapper>
//     //      </>
//     //   </MainContainer>
//     // </div>
  );
}

export default CartPage;
