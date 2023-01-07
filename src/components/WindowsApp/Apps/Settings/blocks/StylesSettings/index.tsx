import { useCallback, useRef, useState } from "react";
import BlockSettings from "../../BlockSettings";

import { cianoPalette, pinkPalette, orangePalette} from "../../../../../../styles/colors"
import { ColorOptionContainer, FormStyles } from "./styles";
import ColorIcon from "../../../../../../assets/icons/settings/colorIcons";

export default function StylesSettings(){
  const colors = [cianoPalette, pinkPalette, orangePalette]

  return(
    <BlockSettings title="Styles">
      <FormStyles>
          <h3 className="titleStyleSettings"> Colors </h3>
          <div className="colorsContainer">
            {colors.map(color => {
              const refInput = useRef<HTMLInputElement>(null)
              const [, updateState] = useState({});
              const forceUpdate = useCallback(() => updateState({}), []);

              return(
                <ColorOptionContainer colors={color}  key={`ColorOption_${colors.indexOf(color)}`}>
                  <input className="colorOption" ref={refInput} onClick={forceUpdate} type="radio" id={colors.indexOf(color).toString()} name="color" value={color} />
                  <label className="colorOptionLabel" onMouseEnter={forceUpdate} onMouseLeave={forceUpdate} htmlFor={colors.indexOf(color).toString()}>
                    <ColorIcon colors={color} active={refInput.current?.checked} /> 
                  </label>
                </ColorOptionContainer>
              )
            })}
          </div>
      </FormStyles>
    </BlockSettings>
  )
}