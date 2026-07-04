import { Award, BookOpen, Download, GitBranch, GraduationCap, Mail, Phone, Send  } from 'lucide-react'
import profilePhoto from '../assets/profile.png'
import { githubProfile, resumeUrl } from '../data/portfolio'

function Home() {
  return (
    <>
      <section className="hero-section section-pad" id="home">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="eyebrow">Hi, I am</p>
              <h1>Pothula Pavan</h1>
              <h2>Computer Science Student</h2>
              <p className="hero-copy">
                B.Tech CSE student at NIT Durgapur. Passionate about competetive coding and full-stack web
                development with expertise in React, Node.js, and database design.
                I love solving complex problems with clean code and building responsive applications.
              </p>
              <div className="hero-actions">
                <a className="btn btn-accent" href="#contact">
                  <Send size={17} />
                  Hire Me
                </a>
                <a className="btn btn-outline-light" href={resumeUrl} target="_blank" rel="noreferrer">
                  <Download size={17} />
                  Resume
                </a>
              </div>
              <div className="social-row" aria-label="Social links">
                <a href={githubProfile} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitBranch size={18} />
                </a>
                <a href="https://www.linkedin.com/in/pavan-pothula-19317b333/" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{fontSize: '16px', textDecoration: 'none'}}>
                  in
                </a>
                <a href="mailto:pothulapavan015@gmail.com" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="tel:8125373436" aria-label="Phone">
                  <Phone size={18} />
                </a>
              </div>
              <div className="coding-profiles">
                <h3 style={{fontSize: '2rem'}}>Coding Profiles</h3>
                <div className="coding-links">
                  <a href="https://codeforces.com/profile/pnp7575" className="btn btn-sm btn-outline-light" target="_blank" rel="noreferrer">CodeForces</a>
                  <a href="https://www.codechef.com/users/pavan_7575" className="btn btn-sm btn-outline-light" target="_blank" rel="noreferrer">LeetCode</a>
                  <a href="https://leetcode.com/u/X1UZNBZdU7/" className="btn btn-sm btn-outline-light" target="_blank" rel="noreferrer">CodeChef</a>
                  <a href="https://atcoder.jp/users/pnp7575" className="btn btn-sm btn-outline-light" target="_blank" rel="noreferrer">AtCoder</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portrait-wrap">
                <img src={profilePhoto} alt="Pothula Pavan profile placeholder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad profile-band" aria-label="Profile highlights">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-md-4">
              <div className="info-panel">
                <GraduationCap size={28} />
                <h3>Education</h3>
                <p>B.Tech CSE, NIT Durgapur</p>
                <span>Current CGPA 9.28</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-panel">
                <Award size={28} />
                <h3>Achievements</h3>
                <p>98.5% in Class XII Boards</p>
                <span>JEE Mains CRL 12620</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-panel">
                <BookOpen size={28} />
                <h3>Problem Solving</h3>
                <p>DSA and core CS fundamentals</p>
                <span>OOPS, OS, DBMS, and coding practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
