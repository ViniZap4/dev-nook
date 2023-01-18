import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

import SettingsIcon from "../../../assets/icons/Menu/settings";
import Settings from "./Settings";
import EditShortcutApp from "./EditShortcut";

//icons
import PlusIcon from "../../../assets/icons/plus";
import CreateShortcut from "./CreateShortcut";
import ShortcutIcon from "../../../assets/icons/shortcutIcons/ShortcutIcon";

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
    },
    {
      content: <EditShortcutApp />,
      icon: <ShortcutIcon colors={colors} />,
      Menu: false,
      label: "Edit Shortcut"
    },
    
  ]
}


