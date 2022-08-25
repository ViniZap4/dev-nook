import React, { useContext } from 'react';
import AppBoxItem from '../AppBoxItem';
import { PageContents } from '../MenuContents';
import PageBoxItem from '../PageBoxItem';

import { Container } from './styles';

const MenuBar: React.FC = () => {
  

  return (
    <Container>
      <PageBoxItem>
        {PageContents()}
      </PageBoxItem>
    </Container>
  );
}

export default MenuBar;