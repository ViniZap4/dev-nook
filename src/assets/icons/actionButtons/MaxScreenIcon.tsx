interface MaxScreenIconProps{
  color: string;
}

export default function MaxScreenIcon({color}: MaxScreenIconProps){
  return(
    <svg className="ActionButton" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M85.5366 86.8293L75.2454 42.8343L42.2902 73.7442L85.5366 86.8293Z" fill={color}/>
      <path d="M14 14L24.2912 57.9949L57.2463 27.0851L14 14Z" fill={color}/>
    </svg>
  )
}