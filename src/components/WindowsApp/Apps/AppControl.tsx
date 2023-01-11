import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

import SettingsIcon from "../../../assets/icons/Menu/settings";
import Settings from "./Settings";

import PlusIcon from "../../../assets/icons/plus";
import CreateShortcut from "./CreateShortcut";

export default function AppsControll(){
  const {colors} = useContext(ThemeContext)

  return [
    {
      content: <Settings />,
      icon: <SettingsIcon colors={colors} />,
      Menu: true,
      label: "Settings"
    },
    {
      content: <CreateShortcut />,
      icon: <PlusIcon colors={colors} />,
      Menu: false,
      label: "Create Shortcut"
    }
  ]
}


