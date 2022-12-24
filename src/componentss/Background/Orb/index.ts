import { createNoise2D} from 'simplex-noise'
import debounce from 'lodash.debounce';
import {Graphics} from "pixi.js"

//utils
import random from "../../../util/radom";
import map from "../../../util/map";

const noise2D = createNoise2D();

export default class Orb{

  public graphics;
  
  private bounds;

  private x;
  private y;
  private scale;
  private fill;
  private radius;
 
  private xOff;
  private yOff;
 
  private inc;

  constructor(fill:number = 0x000000) {
    this.bounds = this.setBounds();

    this.x = random(this.bounds["x"].min, this.bounds["x"].max)
    this.y = random(this.bounds["y"].min, this.bounds["y"].max)

    this.scale = 1
    this.fill = fill // color
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3)

    
    this.xOff = random(0, 1000)
    this.yOff = random(0, 1000)
    
    // velocity
    this.inc = 0.0009

    // Draw
    this.graphics = new Graphics()
    this.graphics.alpha = 0.825

    // update on resize window
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds()
      }, 250)
    );
  }

  setBounds() {
    const maxDist = window.innerWidth < 1000 ? window.innerWidth/1.8  : window.innerWidth/2.7
    
    const originX = window.innerWidth/2
    const originY = window.innerHeight/1.5

    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist
      }
    };
  }

  update(){
    const xNoise = noise2D(this.xOff, this.xOff);
    const yNoise = noise2D(this.yOff, this.yOff);
    const scaleNoise = noise2D(this.xOff, this.yOff);

    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);

    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render(){
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    //clean last frame
    this.graphics.clear();

    this.graphics.beginFill(this.fill);
    this.graphics.drawCircle(0, 0, this.radius);

    this.graphics.endFill();
  }
}