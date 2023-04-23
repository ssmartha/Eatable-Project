import styled from "@emotion/styled";
import {Wrapper1, Wrapper2} from "../components/input"
import { useAuth } from "../context/auth-context";
import { colors } from "../styles";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: pink;
    border-radius: 20px;
    padding: 20px;
    gap: 20px;
`;

const CounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${colors.orange.orioles_orange};
    gap: 6px;
    border-radius: 30px;
    padding: 0px 8px;
`;

const Text1 = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 20.11px;
`;

const Text2 = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 22.63px;
`;

function CartProduct({image, name, price, quantity, id, increaseQuantity, decreaseQuantity}){

    return(
        <ProductContainer>
            <img src={image} alt={"product photo"} style={{height:"55px", width:"60px", borderRadius: "50%"}}/>
 
            <Wrapper1 style={{gap: "8px"}}>
                <Text1>{name}</Text1>
                <Wrapper2 style={{gap: "89px", alignItems:"center", justifyContent:"center"}}>
                    <Text2 style={{color: `${colors.orange.orioles_orange}`}}>{price * quantity}</Text2>
                    <CounterContainer>
                     <Text2 style={{color: `${colors.white.one}`}} onClick={()=> decreaseQuantity(id)}>-</Text2>
                     <Text2 style={{color: `${colors.white.one}`}}>{quantity}</Text2>
                     <Text2 style={{color: `${colors.white.one}`}} onClick={()=> increaseQuantity(id)}>+</Text2>
                    </CounterContainer>
                </Wrapper2>
            </Wrapper1>
        </ProductContainer>
    );
}

export default CartProduct;