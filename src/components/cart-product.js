import styled from "@emotion/styled";
import {Wrapper1, Wrapper2} from "../components/input"

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
    background-color: #FA4A0C;
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

function CartProduct(){

    return(
        <>
        <ProductContainer>
            image
            {/* <img src={image} alt={id}/> */}
            <Wrapper1 style={{gap: "8px"}}>
                <Text1>Veggie tomato mix</Text1>
                <Wrapper2 style={{gap: "89px", alignItems:"center", justifyContent:"center"}}>
                    <Text2 style={{color: "#FA4A0C"}}>$75.45</Text2>
                    <CounterContainer>
                     <Text2 style={{color: "#FFFFFF"}}>-</Text2>
                     <Text2 style={{color: "#FFFFFF"}}>5</Text2>
                     <Text2 style={{color: "#FFFFFF"}}>+</Text2>
                    </CounterContainer>
                </Wrapper2>
            </Wrapper1>
        </ProductContainer>
        </>
    );
}

export default CartProduct;