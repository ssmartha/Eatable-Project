// import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "../styles";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import ProductCard from "./product-card";
import { productsKey } from "../config";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as productServices from "../services/product-services";
import { StyledButton } from "./input";
import { Link } from "react-router-dom";
import { CgSandClock } from "react-icons/vsc";
import SearchState from "../components/search-state";
import { CiSearch } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { addNewOrderToCart, getCartProducts } from "../services/order-services";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  width: 300px;
`;

function ShowProduct() {
  const { id } = useParams();
  const { user, state, setState, cartData, setCartData} = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProductData, setCurrentProductData] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  // let initialCart = [];

  useEffect(() => {
    productServices.getProduct(id)
      .then((data) => {
        setCurrentProductData(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [id]);

  // useEffect((initialCart) => {
  //   setCartData(initialCart)
  //   // getCartProducts().then((data) =>{
  //   //     let ordersList=  data.map(function(obj) {
  //   //     return obj["order_details"].map(function(order) {
  //   //       return {date: obj["created_at"], id: order["product_id"], quantity: order["quantity"], subtotal: order["subtotal"], "product_name": order["product_name"]} } )
  //   //       }).reduce(function (a, b) { return a.concat(b) });
  //   //     setCartData(ordersList);
  //   //   }).catch(console.log);

  // }, [addedToCart]);

  function handleButtonClick(currentProductData, cartData, user, id, state) {

    // const newOrder = {
    //   "delivery_address": user.address,
    //   "items": [
    //     {"id": id, "quantity": 1 }
    //   ]
    // }
    // console.log(newOrder);
    // addNewOrderToCart(newOrder).then(console.log).catch(console.log);
    // let cart = cartData;
    // let newCart = cart.push(currentProductData);
    console.log("CHANNIE PRODUCT DATA", currentProductData, typeof currentProductData);
    console.log("CHANNIE CART DATA", cartData, typeof cartData);

    // initialCart.push(currentProductData)

    // console.log("CHANNIE NEW CART", newCart)
    // setCartData(newCart)
    // setCartData({...cartData,...currentProductData, quantity: 1});
    setCartData([...cartData, { ...currentProductData, quantity: 1 }]);
    setAddedToCart(true);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginTop:"53px"}}>
      <MainContainer>
        {isLoading ? (
          <div>
            <GiSandsOfTime style={{width: "120px", height: "120px"}}/>
            <p>Retrieving product data!</p>
          </div>
        )
          : (
            <>
                <div>
                  {addedToCart ? <AiOutlineLeft onClick={()=> setAddedToCart(false)}/> : <Link to="/products"> <AiOutlineLeft/> </Link>}
                  <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                    <h3>{currentProductData.name}</h3>
                    <h3>${currentProductData.price}</h3>
                  </div>
                  <h6>Description</h6>
                  <p>${currentProductData.description}</p>
                </div>

              <StyledButton onClick={()=> handleButtonClick( currentProductData, cartData, user, id)} disabled={addedToCart}>
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </StyledButton>
            </>
          )}
      </MainContainer>
    </div>
  );
}


export default ShowProduct;
