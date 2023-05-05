import styled from "@emotion/styled";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {AiOutlineLeft} from "react-icons/ai";
import { useAuth } from "../context/auth-context";
import { Wrapper1, Wrapper2, StyledButton } from "../components/input";
import UpdateDetails from "../components/update-details";
import { addNewOrder, getOrders } from "../services/order-services";
import { Navigate } from "react-router-dom";
import { colors } from "../styles";

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
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    background: ${colors.white.one};
`;

function CheckoutPage(){

    const {user, totalCurrentOrder, cartData, setCartData,
           setTotalCurrentOrder} = useAuth();
    const [changeUserDetails, setChangeUserDetails] = useState(false)
    const [disabledStatusOrderButton, setDisabledStatusOrderButton]= useState(cartData? false: true)
    const navigate = useNavigate();

    function completingOrder(){
        const cleanCartData = cartData?.reduce((acum,current)=>{
            acum.push({id: current.id, quantity: current.quantity});
            return acum;            
        },[])

        const newOrder={"delivery_address": user.address,"items": cleanCartData}

        addNewOrder(newOrder).then(console.log).catch(console.log)
        setCartData(null);
        setTotalCurrentOrder(0);
        navigate("/history")
    }

    return(
        <Wrapper1 style={{alignItems:"center", marginTop:"33px"}}>
            <MainContainer>
                <Wrapper2 style={{gap:"105px", marginBottom:"25px"}}>
                    <Link to="/cart"><AiOutlineLeft/></Link>
                    <Text2>Checkout</Text2>
                </Wrapper2>

                <Text1 style={{marginBottom:"30px"}}>Delivery</Text1>

                {changeUserDetails?
                    <>
                        <Text4 style={{marginBottom:"17px"}}>Update details</Text4>
                        <UpdateDetails updateMainState={setChangeUserDetails} newMainState={false}/>
                    </>
                    : 
                    <>
                        <Wrapper2 style={{ marginBottom: "17px",justifyContent:"space-between"}}>
                            <Text4>Address details</Text4>
                            <Text5 style={{color: `${colors.orange.orioles_orange}`}} onClick={()=> setChangeUserDetails(true)}>change</Text5>
                        </Wrapper2>

                        <AddressDetailsContainer>
                            <div style={{paddingBottom:"7px",borderBottom: "0.5px solid white"}}>
                            <Text4>{user.name}</Text4>
                            </div>
                            <div style={{padding: "10px 0px 5px 0px", borderBottom:"0.5px solid white"}}>
                            <Text6>{user.address}</Text6>
                            </div>
                            <div style={{paddingTop:"10px"}}>
                            <Text6>{user.phone}</Text6> 
                            </div>
                        </AddressDetailsContainer>

                        <Wrapper2 style={{justifyContent:"space-between", marginBottom:"35px", marginTop:"80px"}}>
                            <Text7>Total</Text7>
                            <Text3>{totalCurrentOrder}</Text3>
                        </Wrapper2>

                        <StyledButton onClick={completingOrder} disabled={disabledStatusOrderButton}>
                            <Text4>Complete order</Text4>
                        </StyledButton>
                    </>
                }
            </MainContainer>
        </Wrapper1>
    );
}

export default CheckoutPage;