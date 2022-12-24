import { useContext, useEffect, useRef } from "react";
import { Application } from "pixi.js";
import Orb from "./Orb";

import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";

import { Container } from "./styles";
import {ThemeContext} from "../../contexts/themeContext";

export default function Background(){
  const {colors} = useContext(ThemeContext)
  const canvasRef = useRef<HTMLDivElement>(null)
  
  // create canvas tag element
  const canvasView = document.createElement('canvas')

  const app = new Application({
    view: canvasView,
    resizeTo: window,
    backgroundAlpha: 0
  });
  


  useEffect(() => {

    canvasRef.current?.appendChild(canvasView)
    app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

    app.start();

    // creating orbs
    const orbs:Orb[] = [];
    for (let i = 0; i < 10; i++) {
      const orb = new Orb(Number("0x" + colors[i]))
      app.stage.addChild(orb.graphics)
      orbs.push(orb)
    }
    
    //animating
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      app.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update()
          orb.render()
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update()
        orb.render()
      });
    }

    return () => {
      app.stop()
    };

  }, []);
  
  return <Container colors={colors} ref={canvasRef} ></Container>
}