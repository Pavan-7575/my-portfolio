import { Code2 } from 'lucide-react'
import { skills } from '../data/portfolio'
import ContentCarousel from './ContentCarousel'

function Skills() {
  return (
    <section className="section-pad" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>What I work with</h2>
        </div>
        <ContentCarousel ariaLabel="Skills carousel" desktop={4} tablet={2} mobile={1}>
          {skills.map((group) => (
            <div className="skill-card" key={group.title}>
              <Code2 size={24} />
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </ContentCarousel>
      </div>
    </section>
  )
}

export default Skills
