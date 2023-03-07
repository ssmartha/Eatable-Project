import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {AiOutlineLeft} from "react-icons/ai";
import { Wrapper1, Wrapper2, StyledButton } from "../components/input";

const Text1= styled.p`
    font-weight: 600;
    font-size: 28px;
    line-height: 35.2px;
`;

const Text2= styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 27.65px;
`;

const Text3= styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 26.25px;
`;

const Text4= styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 22.63px;
`;

const Text5= styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 20.11x;
`;

const Text6= styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22.63px;
`;

const Text7= styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 20.29px;
`;

const MainContainer= styled.div`
    display:flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
`;

const AddressDetailsContainer= styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 30px;
    border-radius: 20px;
    background: pink;
`;

function CheckoutPage(){
    
    return(
        <Wrapper1 style={{gap:"20px", alignItems:"center", marginTop:"33px"}}>
            <MainContainer>
                <Wrapper2 style={{gap:"105px", marginBottom:"25px"}}>
                    <Link to="/cart"><AiOutlineLeft/></Link>
                    <Text2>Checkout</Text2>
                </Wrapper2>

                <Text1 style={{marginBottom:"30px"}}>Delivery</Text1>

                <Wrapper2 style={{marginBottom:"17px", justifyContent:"space-between"}}>
                    <Text4>Address details</Text4>
                    <Text5 style={{color:"#FA4A0C"}}>change</Text5>
                </Wrapper2>

                <AddressDetailsContainer>
                    <div style={{paddingBottom:"7px",borderBottom: "0.5px solid white"}}>
                      <Text4>Margarita Flores</Text4>
                    </div>
                    <div style={{padding: "10px 0px 5px 0px", borderBottom:"0.5px solid white"}}>
                      <Text6>Calle Rosales 123, urb El Jardin</Text6>
                    </div>
                    <div style={{paddingTop:"10px"}}>
                      <Text6>987654321</Text6> 
                    </div>
                </AddressDetailsContainer>

                <Wrapper2 style={{justifyContent:"space-between", marginBottom:"35px", marginTop:"80px"}}>
                    <Text7>Total</Text7>
                    <Text3>$27.90</Text3>
                </Wrapper2>

                <StyledButton>
                    <Text4>Complete order</Text4>
                </StyledButton>
            </MainContainer>
        </Wrapper1>
    );
}

export default CheckoutPage;