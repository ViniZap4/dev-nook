import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@keyframes slide-in-burred-top {
  0% {
    transform: translateY(-90vw) scaleY(2.5) scaleX(0.2);
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

@keyframes scale-in-center {
  0% {
    transform: translateY(0vh) scale(0);
    opacity: 1;
  }
  100% {
    transform:  translateY(0vh) scale(1);
    opacity: 1;
  }
}

 @keyframes jello-horizontal {
  0% {
    transform:  scale3d(1, 1, 1);
  }
  30% {
    transform:  scale3d(1.25, 0.75, 1);
  }
  40% {
    transform:  scale3d(0.75, 1.25, 1);
  }
  50% {
    transform:  scale3d(1.15, 0.85, 1);
  }
  65% {
    transform:  scale3d(0.95, 1.05, 1);
  }
  75% {
    transform:  scale3d(1.05, 0.95, 1);
  }
  100% {
    transform:  scale3d(1, 1, 1);
  }
}

`