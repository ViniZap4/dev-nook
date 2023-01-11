import { color } from "../../styles/colors";

interface PlusIconProps{
  colors: color;
}

export default function PlusIcon( {colors}: PlusIconProps){
  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="15" height="83" rx="7.5" transform="matrix(1 0 0 -1 42 89)" fill={`#${colors[0]}`}/>
      <rect width="15" height="83" rx="7.5" transform="matrix(0 -1 -1 0 91 55)"fill={`#${colors[0]}`}/>
    </svg>
  )
}