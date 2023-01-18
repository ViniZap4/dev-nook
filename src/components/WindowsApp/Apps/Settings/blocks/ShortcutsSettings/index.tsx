import BlockSettings from "../../BlockSettings";
import { ShortCutSettings } from "./styles";

export default function ShortcutsSettings(){
  return(
    <BlockSettings title="Shortcuts">
      <ShortCutSettings>
        <BlockSettings subtitle="menu">
          <></>
        </BlockSettings>
        <BlockSettings subtitle="menu">
          <></>
        </BlockSettings>
      </ShortCutSettings>
    </BlockSettings>
  )
}