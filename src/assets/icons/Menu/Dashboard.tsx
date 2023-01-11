import { color } from "../../../styles/colors";

interface DashboardIconProps{
  colors: color;
}

export default function DashboardIcon( {colors}: DashboardIconProps){

  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="7" width="38" height="48" rx="4" fill={`#${colors[0]}`}/>
      <rect width="38" height="48" rx="4" transform="matrix(1 0 0 -1 55 93)" fill={`#${colors[0]}`}/>
      <rect x="10" y="60" width="38" height="33" rx="4" fill={`#${colors[4]}`}/>
      <rect width="38" height="33" rx="4" transform="matrix(1 0 0 -1 55 40)" fill={`#${colors[4]}`}/>
    </svg>
  )
}