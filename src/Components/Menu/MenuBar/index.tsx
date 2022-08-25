import React, { useContext } from 'react';
import { UserContext } from '../../../Contexts/userContext';
import { PageContents } from '../MenuContents';
import PageBoxItem from '../PageBoxItem';

import { Container } from './styles';

const MenuBar: React.FC = () => {
  const {authenticated} = useContext(UserContext)
  
  const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABB0lEQVRoge2YQQ7CIBBFP42XMLYn6j3YeRlXehIP1CbeorigLjQMCXSAYP5bljDwQgcmAxBCSEuMNHCDmw3wAHBJjLkCsFeY5/fH1wyYjHhmddjshPMzNDqI04B7+mIAgBFe/HepzHhuNF48iCiwbySXKbQR3XiemEAXUKA1FGhNRQGzHpi8SAPVBBw2mymxOAxWGjwd2FMS+0sq3ue5MAda071AtRzQrm4/VDsB/erWU/MXYjUaggKtiQkUqV20iQlY5Eksg59bBfEd2O9d9dpFm7/OgS7oXkDMgVKdNG0iJ1Cmk6ZNRKBMJ02b7nOAAq2hQGsiAuqdtLqduQKdtC6qW0IISeMNfPE8kvWEka0AAAAASUVORK5CYII="

  return (
    <Container>
      {
        <PageBoxItem>
          {PageContents()}
        </PageBoxItem>
      }
    </Container>
  );
}

export default MenuBar;