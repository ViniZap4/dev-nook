import { color } from "../../styles/colors";

interface HomeIconProps{
  colors: color;
}

export default function HomeIcon( {colors}: HomeIconProps){
  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.5 20.5L91.6362 49.75H9.36379L49.5 20.5Z" fill={`#${colors[0]}`}/>
      <path d="M15 40H85V85C85 87.2091 83.2091 89 81 89H19C16.7909 89 15 87.2091 15 85V40Z" fill={`#${colors[0]}`}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.4387 26.0979C49.9293 24.8202 52.1269 24.8132 53.6256 26.0814L86.1243 53.5803C88.654 55.7208 92.4399 55.4053 94.5803 52.8756C96.7208 50.346 96.4053 46.5601 93.8757 44.4197L61.3769 16.9207C55.382 11.8481 46.5917 11.8761 40.6292 16.9868L8.59525 44.4445C6.0793 46.601 5.78793 50.3888 7.94446 52.9047C10.101 55.4207 13.8888 55.7121 16.4047 53.5555L48.4387 26.0979Z" fill={`#${colors[4]}`}/>
      <path d="M38 59C38 57.3431 39.3431 56 41 56H60C61.6569 56 63 57.3431 63 59V89H38V59Z" fill={`#${colors[4]}`}/>
    </svg>
  )
}