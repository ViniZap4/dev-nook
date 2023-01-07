import { color } from "../../../styles/colors";

interface ColorIconProps{
  colors: color;
  active?: boolean;
}

export default function ColorIcon( {colors, active = false, ...rest}: ColorIconProps){
  if(!active){
    return(
      <svg {...rest} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="78.7838" cy="49.5138" r="19.8113" transform="rotate(95.1566 78.7838 45.5138)"              fill={`#${colors[4]}`}/>
        <circle cx="29.066" cy="32.9376" r="12" transform="rotate(95.1566 29.066 32.9376)" fill={`#${colors[0]}`}/>
        <circle cx="47.9805" cy="83.1883" r="14.2223" transform="rotate(95.1566 47.9805 78.1883)"              fill={`#${colors[2]}`}/>
      </svg>
    )
   }
   return(
    <svg {...rest} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32.5" cy="23.5" r="14.5" fill={`#${colors[4]}`}/>
      <circle cx="35.5" cy="70.5" r="22.5" fill={`#${colors[0]}`}/>
      <circle cx="74.5" cy="43.5" r="16.5" fill={`#${colors[2]}`}/>
    </svg>
  )
}
// rx="24.7758" ry="25.2661"