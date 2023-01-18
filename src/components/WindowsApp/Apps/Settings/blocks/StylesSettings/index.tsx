import { useCallback, useContext, useEffect, useRef, useState } from "react";
import BlockSettings from "../../BlockSettings";

import { cianoPalette, pinkPalette, orangePalette, bluePalette} from "../../../../../../styles/colors"
import { ColorOptionContainer, FormStyles } from "./styles";
import ColorIcon from "../../../../../../assets/icons/settings/colorIcons";
import SwitchButton from "../../../../../SwitchButtonTheme";
import { ThemeContext } from "../../../../../../contexts/themeContext";

export default function StylesSettings(){
  const colorsPallets = [cianoPalette, pinkPalette, orangePalette, bluePalette]
  const {setColors, colors} = useContext(ThemeContext)
  const [clicks, setClicks] = useState(0)

  function HundleCache(){
    if(clicks >= 5) setTimeout(()=>{location.reload()},800)
    setClicks(clicks+1)
  }

  return(
    <BlockSettings title="Appearance">
      <FormStyles onClick={HundleCache}>
          <BlockSettings subtitle="Change color">
            <div className="colorsContainer">
              {colorsPallets.map(color => {
                const refInput = useRef<HTMLInputElement>(null)
                const [, updateState] = useState({});
                const forceUpdate = useCallback(() => {updateState({})}, []);
                return(
                  <ColorOptionContainer colors={color}  key={`ColorOption_${colorsPallets.indexOf(color)}`}>
                    <input className="colorOption" ref={refInput} onClick={()=>{forceUpdate();setColors(color)}} type="radio" id={colorsPallets.indexOf(color).toString()} name="color" value={color} defaultChecked={color[0] === colors[0]}/>
                    <label className="colorOptionLabel" onMouseEnter={forceUpdate} onMouseLeave={forceUpdate} htmlFor={colorsPallets.indexOf(color).toString()}>
                      <ColorIcon colors={color} active={refInput.current?.checked} /> 
                    </label>
                  </ColorOptionContainer>
                )
              })}
            </div>
            </BlockSettings>
          
          <BlockSettings subtitle="Change Theme" >
            <SwitchButton />
          </BlockSettings>

      </FormStyles>
    </BlockSettings>
  )
}

/*
<div className="division">
<h3 className="titleStyleSettings"> Change color </h3>
*/