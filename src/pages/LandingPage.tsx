import { EmailIcon, LinkedInIcon, GitHubIcon } from '../components/Icons'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Hi, I'm Nathan Coelho.</h1>
          <p className="hero__subtitle">
            I'm an associate software developer with 5 years of experience in civil engineering and project management.
            I enjoy building clean software solutions that meet real business and user needs.
          </p>
          <div className="contact-row">
            <a href="mailto:njcoelho97@gmail.com" className="contact-item">
              <EmailIcon size={15} />
              <span>njcoelho97@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/njcoelho/"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={17} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/TopWater1932"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={17} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
