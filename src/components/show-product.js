// import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "../styles";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import ProductCard from "./product-card";
import { productsKey } from "../config";
import { useParams, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as productServices from "../services/product-services";
import { StyledButton } from "./input";
import { Link } from "react-router-dom";
import { CgSandClock } from "react-icons/vsc";
import NotFound from "./not-found";
import { CiSearch } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { cartKey } from "../config";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

function ShowProduct() {
  const { id } = useParams();
  const { user, state, setState, cartData, setCartData} = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProductData, setCurrentProductData] = useState(null);

  const [isAddedToCart, setIsAddedToCart] = useState(false);


  useEffect(() => {
    productServices.getProduct(id)
      .then((data) => {
        setCurrentProductData(data);
        setIsLoading(false);
      })
      .catch(console.log);

  }, [id]);

  function handleButtonClick(currentProductData, cartData, user) {

    if (!cartData){
      setCartData([{"id": currentProductData.id, "quantity": 1, "image": currentProductData.picture_url, "name": currentProductData.name, "price": currentProductData.price}]);

    } else {
      
      const newCartData = cartData.push({"id":currentProductData.id, "quantity":1, "image": currentProductData.picture_url, "name": currentProductData.name, "price": currentProductData.price})

      const uniqueProducts = cartData.reduce((acum, current)=> {
        const existing = acum.find(product => product.id === currentProductData.id);
        if(existing){
          existing.quantity += current.quantity;
        } else {
          acum.push(current);
        }
        return acum
      }, [])


      setCartData(uniqueProducts);
    }
    
    
    setIsAddedToCart(true);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginTop:"33px"}}>
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
                  <Link to="/products"> <AiOutlineLeft/> </Link>
                  <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                    <img src={currentProductData.picture_url} alt={id} style={{ width: "241px", height: "241px", borderRadius: "50%", marginTop: "1px", }} />
                    <h3>{currentProductData.name}</h3>
                    <h3>${currentProductData.price}</h3>
                  </div>
                  <h6>Description</h6>
                  <div style={{overflowY: "hidden", height: "120px", marginBottom: "20px"}}>
                    <p>${currentProductData.description}</p>
                  </div>
                </div>

              <StyledButton onClick={()=> handleButtonClick( currentProductData, cartData, user)} disabled={isAddedToCart}>
                {isAddedToCart ? <p>Added To Cart</p> : <p>Add To Cart</p>}
              </StyledButton>
            </>
          )}
      </MainContainer>
    </div>
  );
}


export default ShowProduct;
