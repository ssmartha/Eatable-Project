import styled from "@emotion/styled";
import { useState } from "react";
import { Wrapper1, Wrapper2 } from "./input";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { colors } from "../styles";

const OrderContainer= styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 22px 9px 30px;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    background: ${colors.white.one};
    width: 315px;
`;

const Text1=styled.p`
  font-weight:600;
  font-size:18px;
  line-height:22.63px;
`;

const Text2=styled.p`
  font-weight:400;
  font-size:18px;
  line-height:22.63px;
`;

const Text3=styled.p`
  font-weight:400;
  font-size:16px;
  line-height:20.11px;
`;

function OrderCard({order}){
    const [showOrderDetails, setShowOrderDetails]= useState(false);

    return(
        <OrderContainer>
            
            <Text2>{new Date(`${order.created_at}`).toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'})}</Text2>

            <div style={{paddingRight:"11px"}}>
              <Wrapper2 style={{justifyContent:"space-between", paddingTop:"11px", paddingBottom:"8px"}}>
                {order.order_details.length==1?
                  <Text3>1 item</Text3>
                  :
                  <Text3>{order.order_details.length} items</Text3>
                }
                <Text3 style={{color: `${colors.orange.orioles_orange}`}}>${order.total}</Text3>
              </Wrapper2>

              {showOrderDetails? 
              <Wrapper1 style={{gap:"13px", paddingTop:"10px"}}>
                <Wrapper1>
                  <Text1>Order</Text1>
                  <Wrapper1 style={{gap:"4px", paddingTop:"3px", paddingBottom:"9px", borderBottom:"0.5px solid rgba(0, 0, 0, 0.3)"}}>
                    {order.order_details.map((product)=> (
                      <Wrapper2 style={{justifyContent:"space-between"}}>
                        <Text3>{product.quantity} - {product.product_name}</Text3>
                        <Text3>${product.subtotal}</Text3>
                      </Wrapper2>
                    ))}
                  </Wrapper1>
                </Wrapper1>

                <Wrapper1 style={{gap:"3px"}}>
                  <Text1>Delivery</Text1>
                  <Text3>{order.delivery_address}</Text3>
                </Wrapper1>
              </Wrapper1>: null
            }

            </div>

            {showOrderDetails? <AiOutlineUp style={{alignSelf:'flex-end'}} onClick={()=> setShowOrderDetails(!showOrderDetails)}/> 
            : <AiOutlineDown style={{alignSelf:'flex-end'}} onClick={()=> setShowOrderDetails(!showOrderDetails)}/>}
          </OrderContainer>
    );
}

export default OrderCard;