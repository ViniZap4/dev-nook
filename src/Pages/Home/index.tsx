import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleTextColor } from '../../Styles/utilStyles/linearTextColor';

//import styles 
import { Container } from './styles';


const Home: React.FC = () => {
  const navigate = useNavigate()

  function handleLogin(){
    navigate("/login");
  }

  return (
    <Container>
      <div className="welcome">
        <TitleTextColor>
          Welcome to Dev Nook!
        </TitleTextColor>
        <span className="description">
          Maked for Developers!
        </span>
        <button onClick={handleLogin} className="login">
          <span className='text'>Login</span>
        </button>
      </div>
    </Container>
  );
}

export default Home;