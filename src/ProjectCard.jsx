function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      {/* Content */}
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-tech">{project.tech}</span>
      </div>
    </a>
  );
}

export default ProjectCard;
