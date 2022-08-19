import React from 'react';
import { TitleTextColor } from '../../Styles/utilStyles/linearTextColor';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <div className="loginBox">
        <TitleTextColor> Login </TitleTextColor>
        <span className="message">
          For to login in Dev Nook, you need to have a account in GitHub.
        </span>
        <button className="buttonLogin">
        <span className='text'>Login with GitHub</span>
        </button>
      </div>
    </Container>
  );
}

export default Login;