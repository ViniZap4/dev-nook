import MenuItem from "./MenuItem";

//icons
import DashboardIcon from "../../../assets/icons/Dashboard";
import SettingsIcon from "../../../assets/icons/settings";

//constext
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ThemeContext } from "../../../contexts/themeContext";
import { AppContext } from "../../../contexts/appsContext";

import { useNavigate } from "react-router-dom";

//apps
import Settings from "../../WindowsApp/Apps/Settings";

export default function MenuContents(){
  const {userGitHubData} = useContext(UserContext)
  const {colors} = useContext(ThemeContext)
  const {setApps, apps} = useContext(AppContext)
  const navigate = useNavigate();



  return(
    <>
      <MenuItem label="Dashboard" icon={<DashboardIcon colors={colors} />}  action={() => navigate("/dashboard")} /> |
      <MenuItem label="Settings"  icon={<SettingsIcon colors={colors} />} app element={<Settings />}/>
      <MenuItem label={userGitHubData.login} icon={userGitHubData.avatar_url} />
    </>
  )
}