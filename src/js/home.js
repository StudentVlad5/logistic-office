import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });
let speed = 100;
const widthWindow = window.innerWidth;
const kf = widthWindow / 300;

let canvas = gsap.timeline();
ScrollTrigger.create({
  animation: canvas,
  trigger: ".scrollElement",
  toggleActions: "restart reverse",
  start: "top top",
  end: "bottom 50%+=100px",
  scrub: 2.7,
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
canvas.from("#hospital", { opacity: 0, x: 150 }, 2.4);
canvas.to(
  "#hospital",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  2.8
);
canvas.from("#big-board-1", { opacity: 0, x: -150 }, 0.3);
canvas.to(
  "#big-board-1",
  { x: kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.8 },
  0.7
);
canvas.from("#big-board-2", { opacity: 0, x: -150 }, 2.0);
canvas.to(
  "#big-board-2",
  { x: kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.8 },
  2.5
);
canvas.from("#big-board-3", { opacity: 0, x: -150 }, 3.0);
canvas.from("#big-board-4", { opacity: 0, x: 150 }, 0.3);
canvas.to(
  "#big-board-4",
  { x: -kf * speed, y: 1.1 * speed, scale: 0, opacity: 0.8 },
  0.7
);
canvas.from("#big-board-5", { opacity: 0, x: 150 }, 2.0);
canvas.to(
  "#big-board-5",
  { x: -kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.8 },
  2.5
);
canvas.from("#big-board-6", { opacity: 0, x: 150 }, 3.0);

canvas.to(
  "#strips-1",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0
);
canvas.to(
  "#strips-2",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0.3
);
canvas.to(
  "#strips-3",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0.6
);
canvas.to(
  "#strips-4",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0.9
);
canvas.to(
  "#strips-5",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  1.2
);
canvas.to(
  "#strips-6",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  1.5
);
canvas.to(
  "#strips-7",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  1.8
);
canvas.to(
  "#strips-8",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  2.1
);
canvas.to(
  "#strips-9",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  2.4
);
canvas.to(
  "#strips-10",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  2.7
);
canvas.to(
  "#strips-11",
  { bottom: "160px", scale: 0.3, opacity: 0.5, duration: 0.8 },
  3.0
);
canvas.to(
  "#strips-12",
  { bottom: "60px", scale: 1, opacity: 0.5, duration: 0.8 },
  3.3
);
canvas.to(
  "#strips-16",
  { y: -0.7 * speed, scale: 0, opacity: 0.5, duration: 0.3 },
  0
);
canvas.to(
  "#strips-17",
  {
    y: -1.5 * speed,
    scale: 0,
    opacity: 0.5,
    duration: 0.6,
  },
  0
);

canvas.from("#road", { height: "67%" }, 1);
canvas.to(
  "#car",
  { x: -1.1 * speed, y: 0.5 * speed, top: "80%", left: "30%", scale: 7.25 },
  3
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
