import { Container } from "./style"

//context
import { UserContext } from "../../../contexts/userContext"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/themeContext"
import ShortCut from "./ShortCut"
import { shortcutsContext } from "../../../contexts/shortcutsContext"
import NewShortCut from "./NewShortCut"

export default function ShortCutsBox(){
  const {userGitHubData} = useContext(UserContext)
  const {shortcuts} = useContext(shortcutsContext)

  const {colors} = useContext(ThemeContext)

  return(
    <Container colors={colors}>
      <h2> Shortcuts: </h2>
      <div className="ShortCuts">
        <ShortCut link={`https://github.com/${userGitHubData.login}`} name="GitHub" />
        {shortcuts.map((shortcut, index) => (
          <ShortCut key={`App_${index}`} link={shortcut.link} name={shortcut.name} />
        ))}
        <NewShortCut />
      </div>

    </Container>
  )
}