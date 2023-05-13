import styled from "@emotion/styled";
import { colors } from "../styles";
import { VscHome } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: ${colors.white.anti_flash_white};
    width: 100%;
    height: 68px;
    position: fixed;
    bottom: 0;
`;

function Footer(){
    return (
        <Wrapper>
            <Link to="/products"> 
              {<VscHome style={{width: "45px", height: "45px", color: `${colors.gray.two}`}} />} 
            </Link>
            <Link to="/profile">
              {<BsPersonFill style={{width: "45px", height: "45px", color: `${colors.gray.two}`}} />}
            </Link>
            <Link to="/history">
              {<BiHistory style={{width: "45px", height: "45px", color: `${colors.gray.two}`}} />}
            </Link>
        </Wrapper>
    );
}

export default Footer;