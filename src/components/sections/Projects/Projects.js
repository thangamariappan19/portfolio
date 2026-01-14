
import { projects } from '../../../data/portfolio';
import SectionContainer from '../../ui/SectionContainer/SectionContainer';
import Badge from '../../ui/Badge/Badge';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <SectionContainer id='projects' title='Architectural Case Studies' maxWidth="xl">
      <div className='projects__grid'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${project.featured ? 'project-card--featured' : ''} project-card--${index % 3}`}
          >
            <div className='project-card__header'>
              <div className='project-card__title-group'>
                <h3 className='project-card__title'>{project.name}</h3>
                <span className='project-card__category'>{project.category}</span>
              </div>
              <div className='project-card__links'>
                {project.links?.code && (
                  <a href={project.links.code} aria-label='source code' className='link link--icon' target='_blank' rel="noreferrer">
                    <Github size={18} />
                  </a>
                )}
                {project.links?.live && (
                  <a href={project.links.live} aria-label='live preview' className='link link--icon' target='_blank' rel="noreferrer">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h4 className='project-card__role'>{project.title}</h4>
            <p className='project-card__description'>{project.description}</p>

            <div className='project-card__metrics'>
              {project.metrics && project.metrics.map((metric, idx) => (
                <div key={idx} className='metric'>
                  <span className='metric__value'>{metric.value}</span>
                  <span className='metric__label'>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className='project-card__stack'>
              {project.stack.slice(0, 5).map((item) => (
                <Badge key={item} variant="outline" className="stack-badge">
                  {item}
                </Badge>
              ))}
              {project.stack.length > 5 && (
                <span className="stack-more">+{project.stack.length - 5}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
