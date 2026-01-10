import { useState } from 'react'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  if (!projects.length) return null

  const categories = ['all', ...new Set(projects.map(p => p.category))]
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Featured Projects</h2>

      <div className='projects__filter'>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`projects__filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      <div className='projects__grid'>
        {filteredProjects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
