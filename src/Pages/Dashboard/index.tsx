import React, { useContext } from 'react';
import MenuArea from '../../Components/Menu/MenuArea';
import { UserContext } from '../../Contexts/userContext';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const {user} = useContext(UserContext)
  
  return (
    <Container>
      <h1> Hello {user?.displayName}</h1>
      <MenuArea />
    </Container>
  );
}

export default Dashboard;