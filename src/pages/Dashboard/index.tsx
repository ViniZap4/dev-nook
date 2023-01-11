import { DashBoardContainer, DashBoardContentContainer } from "./styles";

//contents
import UserBox from "./UserBox";
import ShortCutsBox from "./ShortCutsBox";

export default function Dashboard(){

  return(
    <DashBoardContainer>
      <DashBoardContentContainer>
        <UserBox />
        <ShortCutsBox />
      </DashBoardContentContainer>
    </DashBoardContainer>
  )
}