import { FormEvent, useContext } from "react";
import { shortcutsContext } from "../../../../contexts/shortcutsContext";
import { Container } from "./styles";
import { useLocation, useNavigate } from 'react-router-dom'
import { ButtonText } from "../../../styled/button";
import { ThemeContext } from "../../../../contexts/themeContext";


export default function CreateShortcut(){
  const {shortcuts, setShortcuts} = useContext(shortcutsContext)
  const {colors} = useContext(ThemeContext)
  const location = useLocation();
  const navigate = useNavigate();


  function HundleCreateShortcut(event: FormEvent){
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    setShortcuts([ ...shortcuts ,{
      name: data.name.toString(),
      link: data.url.toString(),
    }])
    
    if(location.pathname !== "/dashboard") navigate("/dashboard")     
  }

  return(
    <Container colors={colors}>
      <form onSubmit={HundleCreateShortcut}>
        <label htmlFor="name">
          <span> Name:</span>
        </label>
        <input type="text" placeholder="example" name="name" required/>
        
        <label htmlFor="url">
          <span>Url:</span>
        </label>
        <input type="url" name="url" placeholder="https://example.com" pattern="https://.*" required />
        
        <ButtonText type="submit" colors={colors}>
          <span> Create </span>
        </ButtonText>

      </form>
    </Container>
  )
}