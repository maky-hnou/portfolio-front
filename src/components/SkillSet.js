import { motion, useAnimation } from "framer-motion";

export default function SkillSet({ skillsList, classNameUL, classNameLI }) {
  const controlsList = skillsList.map(() => useAnimation());

  return (
    <ul className={`${classNameUL}`}>
      {skillsList.map((skill, index) => (
        <motion.li
          className={`${classNameLI}`}
          key={index}
          animate={controlsList[index]}
          initial={{ opacity: 1 }}
          onHoverStart={() => {
            // Scale up and fade in the hovered element
            controlsList[index].start({ scale: 1, opacity: 1 });

            // Scale down and fade out the other elements
            skillsList.forEach((_, i) => {
              if (i !== index) {
                controlsList[i].start({ scale: 0.9, opacity: 0.5 });
              }
            });
          }}
          onHoverEnd={() => {
            // Reset all elements to their initial state on hover end
            controlsList.forEach((control) => {
              control.start({ scale: 1, opacity: 1 });
            });
          }}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
}
