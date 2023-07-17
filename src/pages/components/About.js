import { useEffect, useRef } from "react";
import styles from "../../../styles/About.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import User from "./icons/user";
import Image from "next/image";
import me from "/public/foto-perfil.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { x: "-200px", opacity: 0 },
      {
        x: "0px",
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );

    gsap.fromTo(
      `.${styles.imgBox}`,
      { scale: 0.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 150%",
          end: "bottom 0%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="mt-64 relative">
      <h2 className="section-title mt-60" ref={ref}>
        FUGENX
      </h2>
      <div className="mt-20 flex items-center">
        <div className="title flex items-center">
          <User />
          <h3 className="min-w-max md:ml-4 ml-2 md:text-2xl text-lg font-semibold">
            About Us
          </h3>
        </div>
        <div className="line ml-6 w-full bg-primary"></div>
      </div>

      <div className="md:mt-20 mt-10 md:grid grid-flow-col grid-cols-3">
        <div className="md:col-span-2">
          <p className=" text-secondary leading-relaxed">
            My name is Dikshant Solanki. I have been constantly studying
            technologies that can contribute to my projects and professional
            ambitions. My initial projects were built using pure HTML5 and CSS3,
            creating and recreating existing websites.
          </p>

          <p className="mt-4 text-secondary leading-relaxed">
            I am 22 years old, graduated with a Bachelor's degree from Mumbai
            University (2019-2023). Participated and served as President of the
            committee of ISA, and managed national level event like Yantra and
            VNPS.
          </p>

          <p className="mt-4 text-secondary leading-relaxed">
            Specialized in Front-end and always seeking to improve, I have
            worked on various aspects of web development, including Designing,
            and the development of simple and scalable parts of applications. I
            prioritize good UI/UX practices and utilize modern programming
            languages and best practices.
          </p>
          <p className="mt-4 text-secondary leading-relaxed mb-4">
            Currently, I am deepening my knowledge in:
          </p>
          <ul
            className={`${styles.topics} grid md:grid-cols-3 grid-cols-2 gap-3 text-sm text-left`}
          >
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>UI/UX Designing</li>
            <li>Typescript</li>
          </ul>
        </div>

      
      </div>
    </section>
  );
}
