import React, { useContext } from 'react';
import { UserContext } from '../../Contexts/userContext';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const {user} = useContext(UserContext)
  
  return (
    <div>
      {user?.displayName}
    </div>
  );
}

export default Dashboard;