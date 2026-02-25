import type { Project } from '../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="project-card__image"
        style={{ background: project.imagePlaceholderGradient }}
        aria-hidden="true"
      />
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__name">{project.name}</h3>
          <span className="project-card__date">{project.datePosted}</span>
        </div>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="project-card__description">{project.description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
