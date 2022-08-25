import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export interface Page{
  title: string;
  path: string;
  icon: string;
}

export interface Props{
  children: Page[]
}

const PageBoxItem: React.FC<Props> = ({
  children
}) => {

  return (<>
    <Container>
      {children.map((content, index) => (
        <Link className="PageItem" key={index} to={content.path}>
          <div className="iconBox">
            <img src={content.icon} alt={`${content.title} icon`} className="icon" />
          </div>
          <span className="title">
            {content.title}
          </span>
        </Link>
      ))}
    </Container>
  </>);
}

export default PageBoxItem;