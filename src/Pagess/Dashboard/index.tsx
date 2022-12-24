import { PageContainer } from "../../components/styled/Page";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


export default function Dashboard(){
  const {userGitHubData} = useContext(UserContext)

  return(
    <PageContainer>
      <p style={{color: "#fff"}}> Olá {userGitHubData.login}</p>
    </PageContainer>
  )
}