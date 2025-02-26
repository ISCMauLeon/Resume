import { Skill } from './Skill/Skill';
import './SkillSection.css';

export function SkillSection (props) {
  const {
    title,
    skills,
  } = props;

  return (
    <div className='SkillSection'>
      <div className='SkillSection__Title'>{title}</div>
      <div className='SkillSection__SkillsContainer'>
        {skills?.map(({name, percentage, native=null}) => (
          <Skill
            name={name}
            percentage={percentage}
            native={native}
            key={name}
          />
        ))}
      </div>
    </div>
  )
}