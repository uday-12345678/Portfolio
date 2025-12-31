import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built using React.",
      tech: "React • CSS • JavaScript",
      image: "Portfolio.png",
      link: "https://portfolio-alpha-cyan-ql89u1xiyk.vercel.app/",
    },
    {
      id: 2,
      title: "Resume skill Anlyzer",
      description: "A web app that analyzes resume skills.And also provides skill gap.Help to improve your resume skills.",
      tech: "Html • CSS • JavaScript • Flask • Python",
      image: "Resume_analyzer.png",
      link: "https://resume-dup.vercel.app/",
    },
    {
      id: 3,
      title: "Clock App",
      description: "A clock application showing current time,timer and alarm features.",
      tech: "Html • CSS • JavaScript",
      image: "Clock app.png",
      link: "https://clock-web-app-orcin.vercel.app/",
    },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;

