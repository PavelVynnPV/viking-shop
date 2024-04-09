import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export const swordsAnimation = (leftSword, rightSword) => {
  gsap.to(rightSword, {
    opacity: 0,
    x: window.innerWidth / 3 - 582,
    y: window.innerHeight / 2 - 421,
    ease: "power3.out",
  });
  gsap.to(rightSword, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 1,
  });
  gsap.to(leftSword, {
    opacity: 0,
    x: window.innerWidth / 3 - 375,
    y: window.innerHeight / 2 - 429,
    ease: "power3.out",
  });
  gsap.to(leftSword, {
    opacity: 1,
    x: 0,
    y: -6,
    duration: 1,
  });
};
