import { ActionButtonContainer } from "./style"

interface ActionButtonProps{
  color: string,
  action: ()=> void,
  icon: JSX.Element,
  focus: boolean
}

export default function ActionButton({color, action, icon, focus}: ActionButtonProps){
  return(
    <ActionButtonContainer color={focus? color : "#ccc"} onClick={action}>
      {icon}
    </ActionButtonContainer>
  )
}