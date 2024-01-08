export default function SkillSet({ skillsList, classNameUL, classNameLI }) {
  return (
    <ul className={`${classNameUL}`}>
      {skillsList.map((skill, index) => (
        <li className={`${classNameLI}`} key={index}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
