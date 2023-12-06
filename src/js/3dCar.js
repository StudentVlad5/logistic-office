// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// // import { TransformPlugin } from 'gsap/EaselPlugin';

// // gsap.registerPlugin(TransformPlugin);
// gsap.registerPlugin(ScrollTrigger);


// const car = document.getElementById('car');

// gsap.to(car, {
//   duration: 2, // тривалість анімації в секундах
//   ease: 'power2.inOut', // тип анімації
//   rotationY: 90, // поворот на 90 градусів по Y (праворуч)
//   x: '+=200', // рух вправо на 200 пікселів
// });

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// Ваші картинки
const car = document.getElementById('car');
const img1 = car.querySelector('.car1');
const img2 = car.querySelector('.car2');

// Анімація
gsap.timeline({
  scrollTrigger: {
    trigger: '#car',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  },
})
  .to(car, { rotationY: 90, ease: 'power2.inOut' })
  .to(img1, { opacity: 0, display: 'none' }, 0) // приховати першу картинку
  .from(img2, { opacity: 0, display: 'none' }, 0); // з'явити другу картинку
