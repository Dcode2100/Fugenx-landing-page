import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Mouse from "./icons/mouse";
import { commonStyles } from "../../commonStyles";
import Github from "./icons/github";
import styles from "../../../styles/Projects.module.scss";
import Link from "./icons/link";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      className="  "
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
       <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:max-w-[360px] w-full"
      >
      <div className="relative max-sm:w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={"/github.png"}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
  }, []);

  return (
    <section id="projects" className="mt-64 relative">
      <h2 className="section-title" ref={ref}>
        Projects
      </h2>

      <div className="mt-20 mb-10 flex items-center">
        <div className="flex items-center title">
          <Mouse />
          <h3 className="ml-4 md:text-2xl text-lg w-max font-semibold">
            Projects / Live link
          </h3>
        </div>
        <div className="line ml-6 w-full"></div>
      </div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          we are delighted to present a selection of exceptional projects that
          reflect the expertise and experience of our company. Each project
          demonstrates our team's capability to solve complex challenges,
          utilize diverse technologies, and manage projects effectively. We take
          pride in offering real-world solutions that deliver tangible value to
          our clients.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col gap-7 max-sm:gap-[3rem]">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
