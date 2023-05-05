import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
import { Wrapper1, Wrapper2} from "../components/input";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderCard from "../components/order-card";
import { getOrders } from "../services/order-services";
import NotFound from "../components/not-found";

const OrdersContainer= styled.div`
    display:flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 80px;
`;

const Text1=styled.p`
  font-weight:600;
  font-size:22px;
  line-height:27.65px;
`;

function HistoryPage() {
  const {ordersHistory, setOrdersHistory, setCurrentPage, currentPage} = useAuth();
  setCurrentPage("history-page");

  useEffect(()=>{
    getOrders().then((completedOrders)=> setOrdersHistory(completedOrders)).catch(console.log)
  },[currentPage]);

  return (
    <Wrapper1 style={{marginTop:"33px", alignItems:"center"}}>
      <Wrapper1 >
        <Wrapper2 style={{gap:"105px", marginBottom:"23px"}}>
          <Link to="/checkout"><AiOutlineLeft/></Link>
          <Text1>History</Text1>
        </Wrapper2>

        <OrdersContainer>
          {ordersHistory?
          ordersHistory.map((order)=>(
            <OrderCard
            order = {order}
            />
          ))
          :
          <NotFound item={"history"}/>
          }
          
        </OrdersContainer>
        
      </Wrapper1>
    </Wrapper1>
  );
}

export default HistoryPage;
