import { color } from "../../../styles/colors";

interface ColorIconProps{
  color: string;
  colorBackground: string;
  active?: boolean;
}

export default function SwitchButtonIcon( {color ,colorBackground ,active = false, ...rest}: ColorIconProps){
  if(!active){
    return(
      <svg {...rest} width="100" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" stroke={`${color}`} strokeWidth="1" y="87" width="75" height="182" rx="37.5" transform="rotate(-90 9 87)" fill={`${colorBackground}`}/>
        <circle cx="153" cy="50" r="33" fill={`${color}`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M142 62C153.046 62 162 53.0457 162 42C162 37.079 160.223 32.5732 157.275 29.0893C165.83 31.9274 172 39.9931 172 49.5C172 61.3741 162.374 71 150.5 71C141.944 71 134.556 66.0028 131.095 58.768C134.231 60.8121 137.977 62 142 62Z" fill={`${colorBackground}`}/>
      </svg>
    )
   }
   return(
    <svg {...rest} width="100" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="87" stroke={`${color}`} strokeWidth="4" width="75" height="182" rx="37.5" transform="rotate(-90 9 87)" fill={`${colorBackground}`}/>
      <circle cx="49" cy="50" r="33" fill={`${color}`}/>
      <path d="M49.0612 32.5102V29" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M49.0612 71.1224V67.6122" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M31.5102 50.0612H28" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M71 50.0612H67.4898" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M64.7066 66.5841L62.2245 64.102" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M35.7474 36.7474L33.2653 34.2653" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M33.4159 66.5841L35.8979 64.102" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <path d="M61.4975 36.7474L63.9796 34.2653" stroke={`${colorBackground}`} strokeWidth="7.02041" strokeLinecap="round"/>
      <ellipse cx="49.5" cy="50.0612" rx="12.7245" ry="12.2857" fill={`${colorBackground}`}/>
    </svg>
  )
}
