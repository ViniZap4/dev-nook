import { useContext } from "react";
import SettingsIcon from "../../../assets/icons/settings";
import { ThemeContext } from "../../../contexts/themeContext";
import Settings from "./Settings";

export default function AppsControll(){
  const {colors} = useContext(ThemeContext)

  return [
    {
      content: <Settings />,
      icon: <SettingsIcon colors={colors} />,
    }
  ]
}


