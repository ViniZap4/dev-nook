import { ActionButtonContainer } from "./style"

interface ActionButtonProps{
  color: string,
  action: ()=> void,
  icon: JSX.Element
}

export default function ActionButton({color, action, icon}: ActionButtonProps){
  return(
    <ActionButtonContainer color={color} onClick={action}>
      {icon}
    </ActionButtonContainer>
  )
}