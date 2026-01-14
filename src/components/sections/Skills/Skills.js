
import { skills } from '../../../data/portfolio';
import SectionContainer from '../../ui/SectionContainer/SectionContainer';
import Marquee from '../../features/Marquee/Marquee';
import './Skills.css';

const Skills = () => {
  if (!skills) return null;

  // Flatten skills for marquees
  const allSkills = Object.values(skills).flatMap(group => group.items);
  const topSkills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const bottomSkills = allSkills.slice(Math.ceil(allSkills.length / 2));

  // Icon mapping for each skill category
  const skillIcons = {
    'Frontend Ecosystem': '⚛️',
    'Backend & Data': '🔧',
    'Architecture & DevOps': '🏗️',
    'Tools & Methods': '🛠️'
  };

  return (
    <SectionContainer id='skills' title='Technical Expertise' maxWidth="full">
      <div className='skills__marquee-wrapper'>
        <Marquee items={topSkills} speed={30} direction="left" />
        <Marquee items={bottomSkills} speed={40} direction="right" />
      </div>

      <div className='skills__grid'>
        {Object.values(skills).map((skillGroup) => (
          <div key={skillGroup.title} className='skills__group'>
            <div className='skills__header'>
              <div className='skills__icon'>
                {skillIcons[skillGroup.title] || '💡'}
              </div>
              <h3 className='skills__title'>{skillGroup.title}</h3>
            </div>
            <div className='skills__content'>
              <div className='skills__list'>
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-item__icon">▸</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
