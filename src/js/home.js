import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
let speed = 100;
const widthWindow = window.innerWidth;

let canvas = gsap.timeline();
ScrollTrigger.create({
  animation: canvas,
  trigger: '.scrollElement',
  toggleActions: 'restart reverse',
  start: 'top top',
  end: 'bottom 50%+=100px',
  //   duration: 2,
  scrub: 3,
});

if (widthWindow < 500) {
  canvas.to('#canva', { x: -1.2 * speed, y: 1 * speed, scale: 2.5 }, 0);
  canvas.to('#canva1', { x: 9 * speed, y: 1 * speed, delay: 0.03 }, 0);
  canvas.to('#canva2-1', { x: -10 * speed, scale: 0.5 }, 0);
  canvas.to('#canva2-2', { x: 10 * speed, scale: 0.5 }, 0);
  canvas.to('#canva3-1', { x: -10 * speed, scale: 0.1 }, 0);
  canvas.to(
    '#canva3-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#canva4-1',
    { x: -10 * speed, y: -1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#canva4-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  // canvas.to('#canva5-1', { x: 0.1 * speed, scale: 0.8 }, 0);
  // canvas.to('#canva5-2', { x: -0.1 * speed, scale: 0.8 }, 0);
  canvas.fromTo('#canva5-1', { y: 10 }, { y: -10, scale: 0.8 }, 0);
  canvas.fromTo('#canva5-2', { y: 10 }, { y: -10, scale: 0.8 }, 0);
  canvas.to('#canva6', { delay: 0.03, scale: 0.9 }, 0);
  canvas.to('#canva7', { delay: 0.03, scale: 1.5 }, 0);
} else {
  canvas.to('#canva', { x: -3.75 * speed, y: 1 * speed, scale: 6.5 }, 0);
  canvas.to('#canva1', { x: 9 * speed, y: 1 * speed, delay: 0.03 }, 0);
  canvas.to('#canva2-1', { x: -10 * speed, scale: 0.5 }, 0);
  canvas.to('#canva2-2', { x: 10 * speed, scale: 0.5 }, 0);
  canvas.to('#canva3-1', { x: -10 * speed, scale: 0.1 }, 0);
  canvas.to(
    '#canva3-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#canva4-1',
    { x: -10 * speed, y: -1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#canva4-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to('#canva5-1', { x: 1 * speed, y: -1 * speed }, 0);
  canvas.to('#canva5-2', { x: -1 * speed, y: -1 * speed }, 0);
  canvas.to('#canva6', { delay: 0.03, scale: 0.7 }, 0);
  canvas.to('#canva7', { y: -1 * speed, delay: 0.03, scale: 1.5 }, 0);
}
