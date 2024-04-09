import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainComponent = ({ styles, god }) => {
  const image_odin = useRef();

  useEffect(() => {
    imageAnimate()
  },[]);

  const imageAnimate = () => {
    gsap.to(image_odin.current, {
        opacity: 0,
        y: 0,
        ease: "power3.out",
        x: 0
      });

      ScrollTrigger.create({
          trigger: image_odin.current,
          start: "top 100%",
          onEnter: () => {
            gsap.to(image_odin.current, {
              opacity: 1,
              y: 0,
              x: 0,
              ease: "power3.out",
              duration: 3.5 ,
            });
          },
        });
  }

  return (
    <div className={styles.main__cloth_block}>
      <img
        ref={image_odin}
        src={god.cloth_img}
        alt={god.title}
        className={styles.asgard_cloth_img}
      />
      <div className={styles.cloth_text}>
        <h2 className={styles.cloth__title}>{god.title}</h2>
        <span className={styles.cloth__under_title}>{god.underTitle}</span>
        <a href="/" className={styles.cloth__btn}>
          Shop {god.btnTitle} Hoodie
        </a>
      </div>
    </div>
  );
};
export default MainComponent;
