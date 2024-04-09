import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const imageAnimate = (buy_img, buy_img2, buy_img3, buy_img4) => {
    gsap.to(buy_img.current, {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      x: 0,
    });
  
    ScrollTrigger.create({
      trigger: buy_img.current,
      start: "top 100%",
      onEnter: () => {
        gsap.to(buy_img.current, {
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power3.out",
          duration: 1.5,
        });
      },
    });
  
    gsap.to(buy_img2.current, {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      x: 0,
    });
  
    ScrollTrigger.create({
      trigger: buy_img2.current,
      start: "top 100%",
      onEnter: () => {
        gsap.to(buy_img2.current, {
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power3.out",
          delay: 0.1,
          duration: 1.5,
        });
      },
    });
    gsap.to(buy_img3.current, {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      x: 0,
    });
  
    ScrollTrigger.create({
      trigger: buy_img3.current,
      start: "top 100%",
      onEnter: () => {
        gsap.to(buy_img3.current, {
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power3.out",
          duration: 1.5,
        });
      },
    });
    gsap.to(buy_img4.current, {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      x: 0,
    });
  
    ScrollTrigger.create({
      trigger: buy_img4.current,
      start: "top 100%",
      onEnter: () => {
        gsap.to(buy_img4.current, {
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power3.out",
          duration: 1.5,
          delay: 0.1,
        });
      },
    });
  };
  