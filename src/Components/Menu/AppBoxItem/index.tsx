import React from 'react';

import { Container } from './styles';

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
          <div className='iconBox'>
            <img src={content.icon} alt={`${content.title} icon`} className="icon" />
          </div>
          <span>{content.title}</span>
        </button>
      ))}
    </Container>
  );
}

export default AppBoxItem;