import { DashBoardContainer, DashBoardContentContainer } from "./styles";

//context
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import UserBox from "./UserBox";

export default function Dashboard(){
  const {userGitHubData} = useContext(UserContext)

  return(
    <DashBoardContainer>
        <UserBox />
    </DashBoardContainer>
  )
}