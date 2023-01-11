import MenuItem from "./MenuItem";

//icons
import HomeIcon from "../../../assets/icons/Menu/Home";
import DashboardIcon from "../../../assets/icons/Menu/Dashboard";
import SettingsIcon from "../../../assets/icons/Menu/settings";

//constext
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ThemeContext } from "../../../contexts/themeContext";

import { useNavigate } from "react-router-dom";
import AppsControll from "../../WindowsApp/Apps/AppControl";

export default function MenuContents(){
  const {userGitHubData, authenticated} = useContext(UserContext)
  const {colors} = useContext(ThemeContext)
  const navigate = useNavigate();
  

  return(
    <>
      {authenticated?(<> 
        <MenuItem label="Dashboard" icon={<DashboardIcon colors={colors} />}  action={() => navigate("/dashboard")} /> 
        <MenuItem label={userGitHubData.login} icon={userGitHubData.avatar_url} action={() => navigate("/user")}  /> 
      </>):(<>
        <MenuItem label="Home" icon={<HomeIcon colors={colors} />}  action={() => navigate("/")} /> 
      </>)}
      |
      {AppsControll().map((app, index) => (
        <MenuItem key={`MenuApp_${index}`} label={app.label}  icon={app.icon} app menu={app.Menu} element={index} /> 
      ))}
      
    </>
  )
}
//<MenuItem label="Settings"  icon={<SettingsIcon colors={colors} />} app element={0}/>