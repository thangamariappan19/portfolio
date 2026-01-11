
import { skills } from '../../../data/portfolio';
import SectionContainer from '../../ui/SectionContainer/SectionContainer';
import Badge from '../../ui/Badge/Badge';
import './Skills.css';

const Skills = () => {
  if (!skills) return null;

  return (
    <SectionContainer id='skills' title='Technical Expertise' maxWidth="xl">
      <div className='skills__grid'>
        {Object.values(skills).map((skillGroup) => (
          <div key={skillGroup.title} className='skills__group'>
            <h3 className='skills__title'>{skillGroup.title}</h3>
            <div className='skills__list'>
              {skillGroup.items.map((skill) => (
                <Badge key={skill} variant="default" className="skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
