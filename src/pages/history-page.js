import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
import { Wrapper1, Wrapper2} from "../components/input";
import { AiOutlineLeft, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainContainer= styled.div`
    display:flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
`;

const HistoryOfTheDayContainer= styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 22px 9px 30px;
    border-radius: 20px;
    background: pink;
    width: 315px;
`;

const Text1=styled.p`
  font-weight:600;
  font-size:22px;
  line-height:27.65px;
`;

const Text2=styled.p`
  font-weight:600;
  font-size:18px;
  line-height:22.63px;
`;

const Text3=styled.p`
  font-weight:600;
  font-size:16px;
  line-height:20.11px;
`;

const Text4=styled.p`
  font-weight:400;
  font-size:18px;
  line-height:22.63px;
`;

const Text5=styled.p`
  font-weight:400;
  font-size:16px;
  line-height:20.11px;
`;

function HistoryPage() {
  const { favorites, setCurrentPage } = useAuth();
  const [showOrderDetails, setShowOrderDetails]= useState(false)
  setCurrentPage("FavoritePage");
  console.log(favorites);

  return (
    <Wrapper1 style={{marginTop:"33px", alignItems:"center"}}>
      <MainContainer style={{gap:"11px"}}>
        <Wrapper2 style={{gap:"105px"}}>
          <Link to="/checkout"><AiOutlineLeft/></Link>
          <Text1>History</Text1>
        </Wrapper2>

        <HistoryOfTheDayContainer>
          <Text4>Wed, Mar 17, 2021</Text4>

          <div style={{paddingRight:"11px"}}>
            <Wrapper2 style={{justifyContent:"space-between", paddingTop:"11px", paddingBottom:"8px"}}>
              <Text5>2 items</Text5>
              <Text5 style={{color:"#FA4A0C"}}>$97.90</Text5>
            </Wrapper2>

            {showOrderDetails? 
            <Wrapper1 style={{gap:"13px", paddingTop:"10px"}}>
              <Wrapper1>
                <Text2>Order</Text2>
                <Wrapper1 style={{gap:"4px", paddingTop:"3px", paddingBottom:"9px", borderBottom:"0.5px solid rgba(0, 0, 0, 0.3)"}}>
                    <Wrapper2>
                      <Text5>5 - Veggie tomato mix</Text5>
                      <Text5>$75.45</Text5>
                    </Wrapper2>
                    <Wrapper2>
                      <Text5>1 - Fishwith mix orange....</Text5>
                      <Text5>$12.45</Text5>
                    </Wrapper2>
                </Wrapper1>
              </Wrapper1>

              <Wrapper1 style={{gap:"3px"}}>
                <Text2>Delivery</Text2>
                <Text5>Calle Rosales 123, urb El Jardin</Text5>
              </Wrapper1>
            </Wrapper1>: null
          }

          </div>

          {showOrderDetails? <AiOutlineUp style={{alignSelf:'flex-end'}} onClick={()=> setShowOrderDetails(!showOrderDetails)}/> 
          : <AiOutlineDown style={{alignSelf:'flex-end'}} onClick={()=> setShowOrderDetails(!showOrderDetails)}/>}
        </HistoryOfTheDayContainer>
      </MainContainer>
    </Wrapper1>
  );
}

export default HistoryPage;
