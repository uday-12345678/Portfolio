import SkillCard from "./skillcard";

function Skills() {
  const skills = [
    { id: 1, name: "HTML", level: "Intermediate" },
    { id: 2, name: "CSS", level: "Intermediate" },
    { id: 3, name: "JavaScript", level: "Intermediate" },
    { id: 4, name: "React", level: "Beginner" },
    { id: 5, name: "SQL", level: "Advanced" },
    { id: 6, name: "Power Bi", level: "Intermediate" },
    { id: 7, name: "MS Excel", level: "Advanced" },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}      // 🔑 VERY IMPORTANT
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
}

export default Skills;
