import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <main>
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
