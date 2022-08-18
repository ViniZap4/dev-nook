import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@keyframes slide-in-burred-bottom {
  0% {
    transform: translateY(90vw) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 100%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
`