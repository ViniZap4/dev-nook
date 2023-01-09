import { useTheme } from 'styled-components';

import { useContext, useEffect, useState } from "react";
import SwitchButtonIcon from "../../assets/icons/SwitchButton/SwitchButtonIcon";
import { Container } from "./styles";

import dark from "../../styles/themes/dark"
import light from"../../styles/themes/light"

import { ThemeContext } from '../../contexts/themeContext';

export default function SwitchButton(){
  const {theme, setTheme, colors} = useContext(ThemeContext)
  
  const [active, setActive] = useState(theme.title === "light")

  useEffect(()=>{
    setActive(theme.title === "light")
  },[])


  useEffect(()=>{
    setActive(theme.title === "light")
  },[theme])

  function SwitchButton(){
    setActive(!active)
    setTheme(active ? dark : light)

  }

  return(
    <Container type="button" onClick={SwitchButton}>
        <SwitchButtonIcon color={`#${colors[0]}`} colorBackground={theme.colors.background} active={active} />
    </Container>
  )
}