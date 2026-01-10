import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills || Object.keys(skills).length === 0) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills & Expertise</h2>
      
      <div className='skills__container'>
        {Object.entries(skills).map(([key, category], index) => (
          <div key={index} className='skills__category'>
            <h3 className='skills__category-title'>{category.title}</h3>
            <ul className='skills__list'>
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
