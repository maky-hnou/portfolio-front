import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ExperienceItem({
  title,
  institution,
  dateRange,
  position,
  x_transition,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <li className="relative mx-auto my-0 w-[2px] pb-10 list-none box-border sm:mx-1">
      <div className="z-10 content-[''] bg-light_purple absolute left-1/2 top-[40%] -translate-x-[43%] w-5 h-5 border-solid rounded-full border-[5px] box-border"></div>
      <div className="left-1/2 bg-light_white relative opacity-100">
        <motion.div
          ref={ref}
          className={`${position} opacity-100 bg-white shadow-[0_10px_27px_3px_rgba(204,204,204,0.2)] relative top-2 w-[360px] p-[30px] box-border lg:w-[320px] lg:px-[20px] md:w-[250px] md:px-2 `}
          variants={{
            hidden: { opacity: 0, x: x_transition },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <h4 className="pb-[10px] text-center text-lg text-black my-0 font-semibold box-border md:text-base">
            <time className="box-border">{title}</time>
          </h4>
          <p className="mb-[5px] text-center md:text-sm">
            <b className="text-black">{institution}</b>
          </p>
          <p className="mb-[5px] text-center md:text-sm">{dateRange}</p>
        </motion.div>
      </div>
    </li>
  );
}

export default function Experience() {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      return 0; // Default value if window is not defined
    }
  });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   const resizeObserver = new ResizeObserver(handleResize);
  //   resizeObserver.observe(document.documentElement);

  //   return () => {
  //     resizeObserver.unobserve(document.documentElement);
  //   };
  // }, []);

  const xTransition = windowWidth > 670 ? -50 : 50;
  console.log("xtrx:", xTransition);

  return (
    <ul className="m-0 p-0 list-none list-outside list-image-none box-border">
      <ExperienceItem
        title="Machine Learning Intern"
        institution="Novel-Ti"
        dateRange="February 2018 - July 2018"
        position="odd:left-[50px] md:odd:left-[20px]"
        x_transition={50}
      />
      <ExperienceItem
        title="R&D Engineer - Artificial Intelligence"
        institution="Novel-Ti"
        dateRange="September 2018 - July 2021"
        position="odd:-left-[405px] lg:odd:-left-[365px] md:odd:-left-[270px] sm:odd:left-[20px]"
        x_transition={xTransition}
      />
      <ExperienceItem
        title="IT Consultant & Machine Learning Engineer"
        institution="Aigometri AB"
        dateRange="August 2021 - April 2022"
        position="odd:left-[50px] md:odd:left-[20px]"
        x_transition={50}
      />
      <ExperienceItem
        title="Data Engineer"
        institution="Klarna Bank AB"
        dateRange="May 2022 - May 2023"
        position="odd:-left-[405px] lg:odd:-left-[365px] md:odd:-left-[270px] sm:odd:left-[20px]"
        x_transition={xTransition}
      />
      <ExperienceItem
        title="Sfotware Engineer"
        institution="Klarna Bank AB"
        dateRange="May 2023 - Present"
        position="odd:left-[50px] md:odd:left-[20px]"
        x_transition={50}
      />
      <ExperienceItem
        title="Senior Engineer"
        institution="Klarna Bank AB"
        dateRange="March 2024 - Present"
        position="odd:-left-[405px] lg:odd:-left-[365px] md:odd:-left-[270px] sm:odd:left-[20px]"
        x_transition={xTransition}
      />
    </ul>
  );
}
