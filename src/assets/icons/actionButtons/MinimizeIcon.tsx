interface MinimizeIconProps{
  color: string;
}

export default function MinimizeIcon({color}: MinimizeIconProps){
  return(
    <svg className="ActionButton" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="57" width="15" height="90" rx="7.5" transform="rotate(-90 5 57)" fill={color}/>
    </svg>
  )
}