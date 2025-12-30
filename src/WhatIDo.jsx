const whatIDoData = [
  {
    title: "Frontend Development",
    description:
      "I build clean, responsive, and user-friendly web applications using modern technologies like React, HTML, CSS, and JavaScript.",
  },
  {
    title: "Data Analysis",
    description:
      "I analyze data using Python and SQL to uncover patterns, generate insights, and support data-driven decision-making.",
  },
  {
    title: "Machine Learning",
    description:
      "I work with machine learning concepts to build and experiment with models that solve real-world problems.",
  },
  {
    title: "Software Development",
    description:
      "I approach software development with a problem-solving mindset, focusing on scalable and maintainable solutions.",
  },
];

function WhatIDo() {
  return (
    <section className="what-i-do section">
      <h2>What I Do</h2>

      <div className="what-i-do-grid">
        {whatIDoData.map((item, index) => (
          <div key={index} className="what-i-do-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatIDo;
