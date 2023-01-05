import { Container } from "./style"

//context
import { UserContext } from "../../../contexts/userContext"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/themeContext"
import DashboardIcon from "../../../assets/icons/Dashboard"

export default function UserBox(){
  const {userGitHubData} = useContext(UserContext)
  const {colors} = useContext(ThemeContext)

  return(
    <Container colors={colors}>
      <div className="iconBox">
        <img src={userGitHubData.avatar_url} alt="avatarIcon" />
      </div>
      <div className="userData">
        <h1 style={{color: "#fff"}}> {userGitHubData.login}</h1>
        <span style={{color: "#d4d4d4"}}> {userGitHubData.bio}</span>
      </div>
    </Container>
  )
}