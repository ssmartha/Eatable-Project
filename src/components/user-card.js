import styled from "@emotion/styled";
import { BsStarFill } from "react-icons/bs";
import { colors } from "../styles";

const StyledUserCard = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px;
  width: 300px;
  height: 56px;
  background-color: ${colors.white.one};
  box-shadow: 2px 2px 0px rgba(0 0 0 0.25);
  border-radius: 4px;
`;

const StyledAvatar = styled("img")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;


function UserCard({
  key,
  img,
  user,
  name="undefined",
  icon = "undefined",
}) {

  return (
    <div>
      <StyledUserCard key={key}>
        <StyledAvatar src={img}/>
          <div>
            <p key={key}>{user}</p>
            {name !== "undefined" && <p>{name}</p>}
          </div>
          {icon !== "undefined" && <p style={{marginLeft: "auto"}} > <BsStarFill style={{color: `${colors.yellow.maize}`}}/></p>}
      </StyledUserCard>
    </div>
  );
}

export default UserCard;
