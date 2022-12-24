import { useContext } from "react";

import AuthenticationPopup from "./AuthenticationPopUp";

// styles
import { ThemeContext } from "../../contexts/themeContext";
import { ButtonText } from "../styled/button";
import { Container } from "./styles";



export default function SignUp(){
  const { handleGitHubSignIn } = AuthenticationPopup();
 
  const {colors} = useContext(ThemeContext)

  return(
    <Container>
      <div className="MessageContainer">
        <h1 className="Title">
          Sign Up
        </h1>
        <span className="Text">
          For continue you need to sign up with GitHub Account.
        </span>
      </div>
      <ButtonText colors={colors} className="buttonLogin" onClick={handleGitHubSignIn}>
         <span className='text'>Sign-In with GitHub</span>
      </ButtonText>
    </Container>
  )
}