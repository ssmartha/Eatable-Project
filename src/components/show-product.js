import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import { getProduct } from "../services/product-services"
import { StyledButton } from "./input";
import { Link } from "react-router-dom";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineLeft } from "react-icons/ai";
import { colors } from "../styles";
import { cartKey } from "../config";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const PageContentWrapper = styled.div`
  width: 310px;
`;

const LoadingDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ProductImage = styled.img`
  width: 241px;
  height: 241px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

const Text1 = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 35.2px;
`;

const Text2 = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22.63px;
`;

const Text3 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20.11px;
`;

function ShowProduct() {
  const { id } = useParams();
  const { cartData, setCartData} = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProductData, setCurrentProductData] = useState(null);

  const [isAddedToCart, setIsAddedToCart] = useState(false);


  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setCurrentProductData(data);
        setIsLoading(false);
      })
      .catch(console.log);

  }, [id]);

  function handleButtonClick(currentProductData, cartData) {
    let newCartData = cartData;

    if (!cartData){
      newCartData = [{"id": currentProductData.id, "quantity": 1, "image": currentProductData.picture_url, "name": currentProductData.name, "price": currentProductData.price}]
      setCartData(newCartData);

    } else {
      newCartData.push({"id":currentProductData.id, "quantity":1, "image": currentProductData.picture_url, "name": currentProductData.name, "price": currentProductData.price})

      newCartData = newCartData.reduce((acum, current)=> {
        const existing = acum.find(product => product.id === currentProductData.id);
        if(existing){
          existing.quantity += current.quantity;
        } else {
          acum.push(current);
        }
        return acum
      }, [])


      setCartData(newCartData);
    }
    
    sessionStorage.setItem(cartKey, JSON.stringify(Object.values(newCartData)));
    setIsAddedToCart(true);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginTop:"57px"}}>
      <MainContainer>
        {isLoading ? (
          <LoadingDataWrapper>
            <GiSandsOfTime style={{width: "150px", height: "150px"}}/>
            <Text1 style={{textAlign: "center"}}>Retrieving product data</Text1>
          </LoadingDataWrapper>
        )
          : (
            <>
                <PageContentWrapper>
                  <Link to="/products" style={{color: `${colors.black.black}`}}> <AiOutlineLeft/> </Link>
                  <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                    <ProductImage src={currentProductData.picture_url} alt={id}/>
                    <Text1 style={{marginTop: "91px", marginBottom: "10px"}}>{currentProductData.name}</Text1>
                    <Text1 style={{color: `${colors.orange.orioles_orange}`}}>${currentProductData.price}</Text1>
                  </div>
                  <Text2 style={{marginTop: "27px", marginBottom: "4px"}}>Description</Text2>
                  <div style={{overflowY: "hidden", marginBottom: "20px"}}>
                    <Text3>{currentProductData.description}</Text3>
                  </div>
                </PageContentWrapper>

              <StyledButton 
              onClick={()=> handleButtonClick( currentProductData, cartData)} 
              disabled={isAddedToCart}
              style={{width: "310px", marginBottom: "80px"}}
              >
                {isAddedToCart ? <p>Added To Cart</p> : <p>Add To Cart</p>}
              </StyledButton>
            </>
          )}
      </MainContainer>
    </div>
  );
}


export default ShowProduct;
