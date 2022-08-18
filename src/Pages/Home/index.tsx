import React from 'react';

import { useNavigate } from 'react-router-dom';

//import
import { Container } from './styles';


const Home: React.FC = () => {
  const navigate = useNavigate()

  function handleLogin(){
    navigate("/login");
  }

  return (
    <Container>
      <div className="welcome">
        <h1 className="title">
          Welcome to Dev Nook
        </h1>
        <span className="description">
          A nice place for Developers!
        </span>
        <button onClick={handleLogin} className="login">
          <span className='text'>Login</span>
        </button>
      </div>
    </Container>
  );
}

export default Home;