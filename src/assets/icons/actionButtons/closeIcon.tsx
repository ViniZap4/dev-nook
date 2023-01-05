interface CloseIconProps{
  color: string;
}

export default function CloseIcon({color}: CloseIconProps){
  return(
    <svg className="ActionButton" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="15" height="100.482" rx="7.5" transform="matrix(0.706194 0.708018 0.708018 -0.706194 9 79.9601)" fill={color}/>
      <rect x="90.7363" y="79.9601" width="15" height="100.482" rx="7.5" transform="rotate(134.926 90.7363 79.9601)" fill={color}/>
    </svg>
  )
}