import { ArrowUpRight, GitBranch } from 'lucide-react'
import { projects } from '../data/portfolio'
import ContentCarousel from './ContentCarousel'

function Projects() {
  return (
    <section className="section-pad projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Featured Work</h2>
        </div>
        <ContentCarousel ariaLabel="Projects carousel" desktop={3} tablet={2} mobile={1}>
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <small key={tool}>{tool}</small>
                  ))}
                </div>
                <a className="btn btn-github" href={project.href} target="_blank" rel="noreferrer">
                  <GitBranch size={17} />
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </ContentCarousel>
      </div>
    </section>
  )
}

export default Projects
