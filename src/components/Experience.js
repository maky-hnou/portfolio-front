import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

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
    console.log(isInView);
    if (isInView) {
      control.start("visible");
      console.log("done");
    }
  }, [isInView]);

  return (
    <li className="relative mx-auto my-0 w-[2px] pb-10 list-none box-border">
      <div className="z-10 content-[''] bg-light_purple absolute left-1/2 top-[40%] -translate-x-[43%] w-5 h-5 border-solid rounded-full border-[5px] box-border"></div>
      <div className="left-1/2 bg-light_white relative opacity-100">
        <motion.div
          ref={ref}
          className={`${position} opacity-100 bg-white shadow-[0_10px_27px_3px_rgba(204,204,204,0.2)] relative top-2 w-[360px] p-[30px] box-border`}
          variants={{
            hidden: { opacity: 0, x: x_transition },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <h4 className="pb-[10px] text-center text-lg text-black my-0 font-semibold box-border">
            <time className="box-border">{title}</time>
          </h4>
          <p className="mb-[5px] text-center">
            <b className="text-black">{institution}</b>
          </p>
          <p className="mb-[5px] text-center">{dateRange}</p>
        </motion.div>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <ul className="m-0 p-0 list-none list-outside list-image-none box-border">
      <ExperienceItem
        title="Machine Learning Intern"
        institution="Novel-Ti"
        dateRange="February 2018 - July 2018"
        position="odd:left-[50px]"
        x_transition={50}
      />
      <ExperienceItem
        title="R&D Engineer - Artificial Intelligence"
        institution="Novel-Ti"
        dateRange="September 2018 - July 2021"
        position="odd:-left-[405px]"
        x_transition={-50}
      />
      <ExperienceItem
        title="IT Consultant & Machine Learning Engineer"
        institution="Aigometri AB"
        dateRange="August 2021 - April 2022"
        position="odd:left-[50px]"
        x_transition={50}
      />
      <ExperienceItem
        title="Data Engineer"
        institution="Klarna Bank AB"
        dateRange="May 2022 - May 2023"
        position="odd:-left-[405px]"
        x_transition={-50}
      />
      <ExperienceItem
        title="Sfotware Engineer"
        institution="Klarna Bank AB"
        dateRange="May 2023 - Present"
        position="odd:left-[50px]"
        x_transition={50}
      />
      <ExperienceItem
        title="Senior Engineer"
        institution="Klarna Bank AB"
        dateRange="March 2024 - Present"
        position="odd:-left-[405px]"
        x_transition={-50}
      />
    </ul>
  );
}
