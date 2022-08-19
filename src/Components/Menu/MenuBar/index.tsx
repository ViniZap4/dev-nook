import React, { useContext } from 'react';
import { UserContext } from '../../../Contexts/userContext';
import PageBoxItem from '../PageBoxItem';

import { Container } from './styles';

const MenuBar: React.FC = () => {
  const {authenticated} = useContext(UserContext)
  
  const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRoge2YwQ3CMAxFvyNuLIBEuTAAi7BHDizADCyA2kkYhAlQe+DKAjWXViCoK6W4iYL8joni5qlxYhkwDMNICUkTq+N1T+AKjHVgzIYJ/n7aXd4Ht+fHHnAVIzAeoWnZ+dtheRmaduI65nLC5gGgIEb1OcjkyuDNAwCjcGi/4vWIAgCK4I+92AxtRDVex5hAFphAakwgNfEECM0Pq2tpIppAy85PlKiZyUuTix/2FET3kor3+VQsB1KTvUC0HNCubnui/QHt6rYn5hGyanQIE0jNmMAstYs2ogATPKZJ1GAWaxdtxHegu3fVaxdt/joHsiB7ATEH5uqkaTNyC83TSdNGPkIzddK0yT4HTCA1JpAaWUC/kxa3M6fdSculujUMwwjjCZ+ZYM8fp35lAAAAAElFTkSuQmCC"

  return (
    <Container>
      {authenticated ? <>  
        <PageBoxItem >
          {[
            {
              title: 'Dashboard',
              path: '/dashboard',
              icon: icon,
            },
            {
              title: 'Dashboard',
              path: '/dashboard',
              icon: icon,
            },{
              title: 'Dashboard',
              path: '/dashboard',
              icon: icon,
            },
          ]}
        </PageBoxItem>
      </>: 
      <> 
       <PageBoxItem>
          {[
            {
              title: 'Home',
              path: '/',
              icon: icon,
            },
            {
              title: 'Login',
              path: '/login',
              icon: icon,
            }
          ]}
        </PageBoxItem>
      </>
      }
     
      

    </Container>
  );
}

export default MenuBar;