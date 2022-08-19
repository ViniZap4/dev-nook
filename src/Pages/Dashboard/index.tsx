import React, { useContext } from 'react';
import { UserContext } from '../../Contexts/userContext';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const {user} = useContext(UserContext)
  
  return (
    <Container>
      <h1> Hello {user?.displayName}</h1>
    </Container>
  );
}

export default Dashboard;