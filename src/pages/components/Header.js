import { useEffect, useRef } from "react";
import styles from "../../../styles/Header.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Arrow from "./icons/arrow";
import AnchorLink from "react-anchor-link-smooth-scroll";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const timeLine = gsap.timeline({
      defaults: { duration: 0.4, ease: "power4.out" },
    });
    timeLine
      .fromTo(
        `.${styles.introduction}`,
        { y: 100, height: 0, opacity: 0 },
        { y: 0, height: "auto", opacity: 1, duration: 1 }
      )
      .fromTo(
        `.${styles.name}`,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "<1"
      )
      .fromTo(
        `.${styles.function}`,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "<.1"
      )
      .fromTo(
        `.${styles.description}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "<.1"
      )
      .fromTo(".button", { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, "<.5");

    gsap.fromTo(
      el,
      { y: 100 },
      {
        y: -400,
        scrollTrigger: {
          trigger: ".button",
          start: "top 90%",
          end: "bottom -10%",
          scrub: true,
          toggleAction: "restart pause resume pause",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <header className="mx-auto md:max-w-6xl mt-20 relative">
      <h2 className={`${styles.introduction} text-tertiary text-bl text-lg`}>
        Hello, Welcome to
      </h2>
      <h1 className={`${styles.name} md:text-7xl text-5xl font-bold mt-5`}>
       FUGENX
      </h1>
      <h2
        className={`${styles.function} md:text-4xl text-2xl font-bold text-secondary mt-2`}
      >
        Fueled by <span className={styles.front}>Creativity</span>.
      </h2>
      <h3
        className={`${styles.description} text-secondary leading-loose max-w-2xl mt-8 md:text-base text-sm`}
      >
        We are a cutting-edge web development agency, renowned for creating sleek, responsive web applications with exceptional UI/UX. Our expertise lies in optimizing existing projects, delivering high-performance solutions that exceed expectations and provide seamless user experiences.
      </h3>
      <AnchorLink className="button mt-20 ml-0" href="#about">
        <Arrow /> More about us
      </AnchorLink>
      <span className={styles.x} ref={ref}>
        X
      </span>
      <div className={styles.sphere}></div>
    </header>
  );
}
