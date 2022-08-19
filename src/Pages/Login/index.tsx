import React from 'react';
import { TitleTextColor } from '../../Styles/utilStyles/linearTextColor';
import AuthenticationPopup from './AuthenticationPopUp';

import { Container } from './styles';



const Login: React.FC = () => {
  const { handleGitHubSignIn } = AuthenticationPopup(); 


  return (
    <Container>
      <div className="loginBox">
        <TitleTextColor> Sign-In </TitleTextColor>
        <span className="message">
          For to login in Dev Nook, you need to have a account in GitHub.
        </span>
        <button className="buttonLogin" onClick={handleGitHubSignIn}>
        <span className='text'>Sign-In with GitHub</span>
        </button>
      </div>
    </Container>
  );
}

export default Login;