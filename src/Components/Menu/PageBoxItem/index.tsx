import React from 'react';
import { Link } from 'react-router-dom';

// import styled components
import { Container } from './styles';
import { IconBox } from '../../../Styles/utilStyles/IconBox';

export interface Page{
  title: string;
  path: string;
  icon: string;
}

interface Props{
  children: Page[]
}

const PageBoxItem: React.FC<Props> = ({
  children
}) => {

  return (<>
    <Container>
      {children.map((content, index) => (
        <Link className="PageItem" key={index} to={content.path}>
          <IconBox className="iconBox" index={index}>
            <img src={content.icon} alt={`${content.title} icon`} className="icon" />
          </IconBox>
          <span className="title">
            {content.title}
          </span>
        </Link>
      ))}
    </Container>
  </>);
}

export default PageBoxItem;