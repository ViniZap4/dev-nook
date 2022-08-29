import React from 'react';
import { Link } from 'react-router-dom';
import MenuArea from '../../Components/Menu/MenuArea';
import { TitleTextColor } from '../../Styles/utilStyles/linearTextColor';

//import styles 
import { Container } from './styles';


const Home: React.FC = () => {
  return (
    <Container>
      <div className="welcome">
        <TitleTextColor>
          Welcome to Dev Nook!
        </TitleTextColor>
        <span className="description">
          Made for Developers!
        </span>
        <Link to="/login" className="login">
          <span className='text'>Login</span>
        </Link>
      </div>
      <MenuArea/>
    </Container>
  );
}

export default Home;