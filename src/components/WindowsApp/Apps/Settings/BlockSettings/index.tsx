import { PropsWithChildren } from "react";
import { Container } from "./styles";

interface BlockSettingsProps{
  title: string
  children: JSX.Element
}

export default function BlockSettings({title, children}:BlockSettingsProps){
  return (
    <Container>
      <h2 className="title">
        {title}
      </h2>
      <div className="contents">
        {children}
      </div>
    </Container>  
  )
}