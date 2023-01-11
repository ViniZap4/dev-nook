import { color } from "../../styles/colors";

interface SettingsIconProps{
  colors: color;
}

export default function SettingsIcon( {colors}: SettingsIconProps){
  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="15" height="83" rx="9" transform="matrix(1 0 0 -1 13 89)" fill={`#${colors[4]}`}/>
      <rect width="15" height="83" rx="9" transform="matrix(1 0 0 -1 42 89)" fill={`#${colors[4]}`}/>
      <rect width="15" height="83" rx="9" transform="matrix(1 0 0 -1 72 89)" fill={`#${colors[4]}`}/>
      <rect x="9" y="36" width="22" height="22" rx="11"  fill={`#${colors[0]}`}/>
      <rect x="38" y="61" width="22" height="22" rx="11" fill={`#${colors[0]}`}/>
      <rect x="68" y="14" width="22" height="22" rx="11" fill={`#${colors[0]}`}/> :
    </svg>
  )
}