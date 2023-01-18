import { Container } from "./style"
import BlockSettings from "./BlockSettings"
import StylesSettings from "./blocks/StylesSettings"
import ShortcutsSettings from "./blocks/ShortcutsSettings"
import { useContext } from "react"
import { UserContext } from "../../../../contexts/userContext"

export default function Settings(){
  const {authenticated} = useContext(UserContext)

    return(
    <Container>
      <StylesSettings />
      {authenticated ? <ShortcutsSettings /> :<></>}
    </Container>
  )
}