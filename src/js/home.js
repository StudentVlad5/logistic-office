import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });
let speed = 100;
const widthWindow = window.innerWidth;

let canvas = gsap.timeline();
ScrollTrigger.create({
  animation: canvas,
  trigger: ".scrollElement",
  toggleActions: "restart reverse",
  start: "top top",
  end: "bottom 50%+=100px",
  scrub: 3,
});

// if (widthWindow < 500) {
//   canvas.to('#car', { x: -1.2 * speed, y: 1 * speed, scale: 2.5 }, 0);
//   canvas.to('#road', { delay: 0.03, scale: 1.5 }, 0);
// } else {
//   canvas.to('#car', { x: -3.75 * speed, y: 1 * speed, scale: 6.5 }, 0);
//   canvas.to('#road', { y: -1 * speed, delay: 0.03, scale: 1.5 }, 0);
// }

canvas.to("#sun", { x: 9 * speed, y: 1 * speed, delay: 0.03, duration: 2 }, 0);
canvas.to("#cloud-1", { x: 10 * speed, scale: 0.5, duration: 2 }, 0);
canvas.to("#cloud-2", { x: 10 * speed, scale: 0.5, duration: 2 }, 0);
canvas.to("#builds", { delay: 0.03, scale: 0.8, duration: 2 }, 0);
canvas.to("#hills-1", { x: 1 * speed, y: -0.009 * speed, duration: 2 }, 0);
canvas.to(
  "#hills-2",
  {
    x: -1 * speed,
    y: -0.009 * speed,
    duration: 2,
  },
  0
);
canvas.to(
  "#tree",
  {
    x: 1 * speed,
    y: -0.1 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#trees",
  {
    x: -1 * speed,
    y: -0.2 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.from("#build-1", { opacity: 0, x: -150 }, 0);
canvas.to(
  "#build-1",
  { x: 1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  0.5
);
canvas.from("#build-2", { opacity: 0, x: 150 }, 0);
canvas.to(
  "#build-2",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  0.5
);
canvas.from("#billboard-1", { opacity: 0, x: -150 }, 0.53);
canvas.to(
  "#billboard-1",
  { x: 1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.03
);
canvas.from("#billboard-2", { opacity: 0, x: 150 }, 0.53);
canvas.to(
  "#billboard-2",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.03
);
canvas.from("#forest-1", { opacity: 0, x: -150 }, 0.6);
canvas.to(
  "#forest-1",
  { x: 1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.1
);
canvas.from("#forest-2", { opacity: 0, x: 150 }, 0.6);
canvas.to(
  "#forest-2",
  {
    x: -1 * speed,
    y: -0.2 * speed,
    scale: 0.1,
    delay: 0.02,
    opacity: 0,
  },
  1.1
);
canvas.from("#build-3", { opacity: 0, x: 150 }, 1.13);
canvas.to(
  "#build-3",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.63
);
canvas.from("#cloud-3", { opacity: 0, x: -150 }, 1.65);
canvas.to("#cloud-3", { x: 7 * speed, scale: 0.5, duration: 2 }, 2.15);
canvas.from("#cloud-4", { opacity: 0, x: -150 }, 1.65);
canvas.to("#cloud-4", { x: 7 * speed, scale: 0.5, duration: 2 }, 2.15);
canvas.from("#hospital", { opacity: 0, x: 150 }, 1.65);
canvas.to(
  "#hospital",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  2.15
);
canvas.from("#big-board-1", { opacity: 0, x: -150 }, 0.01);
canvas.to(
  "#big-board-1",
  { x: 4.4 * speed, y: 1.1 * speed, scale: 0, opacity: 0.8 },
  0.5
);
canvas.from("#big-board-2", { opacity: 0, x: -150 }, 0.83);
canvas.to(
  "#big-board-2",
  { x: 4.4 * speed, y: 1.1 * speed, scale: 0, opacity: 0.8 },
  1.33
);
canvas.from("#big-board-3", { opacity: 0, x: -150 }, 2);
canvas.from("#big-board-4", { opacity: 0, x: 150 }, 0.01);
canvas.to(
  "#big-board-4",
  { x: -4.4 * speed, y: 1.1 * speed, scale: 0, opacity: 0.8 },
  0.5
);
canvas.from("#big-board-5", { opacity: 0, x: 150 }, 0.83);
canvas.to(
  "#big-board-5",
  { x: -4.4 * speed, y: 1.1 * speed, scale: 0, opacity: 0.8 },
  1.33
);
canvas.from("#big-board-6", { opacity: 0, x: 150 }, 2);

canvas.from("#road", { height: "67%" }, 1);
canvas.to(
  "#car",
  { x: -1.1 * speed, y: 0.8 * speed, top: "80%", left: "30%", scale: 7.25 },
  2
);

gsap.to("#car", {
  keyframes: {
    "0%": { x: 0, y: 0 },
    "20%": { x: -2, y: 1 },
    "40%": { x: -2, y: -1 },
    "60%": { x: 2, y: 1 },
    "80%": { x: 2, y: -1 },
    "100%": { x: 0, y: 0 },
  },
  duration: 1,
  repeat: -1,
  scrollTrigger: {
    start: "top top",
    end: "bottom 50%+=100px",
  },
});
