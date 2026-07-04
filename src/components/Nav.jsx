import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { resumeUrl } from '../data/portfolio'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact us' },
]

const getHashSection = () => {
  const hash = window.location.hash.replace('#', '')
  return navItems.some((item) => item.id === hash) ? hash : 'home'
}

const updateUrlHash = (sectionId) => {
  const nextHash = sectionId === 'home' ? '' : `#${sectionId}`

  if (window.location.hash !== nextHash) {
    window.history.replaceState(null, '', nextHash || (window.location.pathname + window.location.search))
  }
}

function Nav() {
  const [activeSection, setActiveSection] = useState(getHashSection)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target.id) {
          const sectionId = visibleEntries[0].target.id
          setActiveSection(sectionId)
          updateUrlHash(sectionId)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar navbar-expand-lg fixed-top portfolio-nav">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="portfolioNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-4">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  href={item.id === 'home' ? '#' : `#${item.id}`}
                  onClick={(e) => {
                    if (item.id === 'home') {
                      e.preventDefault()
                      window.scrollTo(0, 0)
                    }
                    setActiveSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-accent nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">
          <Download size={16} />
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Nav
