import React from 'react';

// import styled components
import { Container } from './styles';
import { IconBox } from '../../../Util/IconBox';;

export interface AppLauncher{
  title: string;
  icon: string;
}

interface Props{
  children: AppLauncher[]
}

const AppBoxItem: React.FC<Props> = ({
  children
}) => {
  return (
    <Container>
      {children?.map((content, index) => (
        <button key={index} className="AppLauncherItem">
          <IconBox className='iconBox' index={index}>
            <img src={content.icon} alt={`${content.title} icon`} className="icon" />
          </IconBox>
          <span>{content.title}</span>
        </button>
      ))}
    </Container>
  );
}

export default AppBoxItem;