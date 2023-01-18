import { PropsWithChildren } from "react";
import { Container } from "./styles";

interface BlockSettingsProps{
  title?: string,
  subtitle?: string
  children: JSX.Element,
  direction?: string,
  alignItems?: string,
  justifyContent?: string
}

export default function BlockSettings({
  title = "", subtitle = "" ,
  children, 
  direction = "column", alignItems= "flex-start", justifyContent = "center"
}:BlockSettingsProps){
  return (
    <Container subtitle={subtitle !== ""} direction={direction} alignItems={alignItems} justifyContent={justifyContent}>
      {title !== "" ? <>
        <h2 className="title">
          {title}
        </h2>
      </> : <>
        <h3 className="subtitle">
          {subtitle}
        </h3>
      </>}

      <div className="contents">
        {children}
      </div>
    </Container>  
  )
}