import { color } from "../../styles/colors";

interface PictureIconProps{
  colors: color;
  text: string;
}

export default function PictureIcon( {colors, text}: PictureIconProps){
  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="21" width="93" height="59" rx="9.20492" fill={`#${colors[0]}`}/>
      <path d="M8 80L35.1563 41.8779C36.5186 39.9655 39.3514 39.9419 40.7454 41.8313L56.7805 63.5652L63.1483 53.349C64.451 51.2591 67.4604 51.1664 68.8892 53.1721L88 80H68.813H8.65041H8Z" fill={`#${colors[4]}`}/>
      <ellipse cx="85" cy="42.5" rx="7" ry="7.5" fill={`#${colors[4]}`}/>
      <text x="8" y="57" fill={`#fff`} style={{fontSize:" xxx-large", fontWeight: "bold"}}>{text}</text>
    </svg>
  )
}