import { color } from "../../../../styles/colors";

interface ShortcutIconProps{
  colors: color;
}

export default function ShortcutIcon( {colors}: ShortcutIconProps){
  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.2809 36.6874C38.8019 35.0916 27.0955 51.4172 49.4958 86.5618C50.3375 87.8823 48.6864 89.4288 47.4587 88.4568C-11.3137 41.9313 40.442 23.963 54.2809 24.4754L51.2872 9.26125C51.0501 8.0561 52.3873 7.16503 53.4083 7.84789L85.248 29.1441C86.0747 29.6971 86.0626 30.9165 85.2252 31.453L53.4348 51.8181C52.4019 52.4798 51.0837 51.5656 51.3415 50.3663L54.2809 36.6874Z" fill={`#${colors[0]}`}/>
    </svg>
  )
}