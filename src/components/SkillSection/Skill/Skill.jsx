import { useTranslation } from "react-i18next";
import './Skill.css';

export function Skill(props) {
  const {
    name,
    percentage,
    native,
  } = props;

  const { t } = useTranslation();
  const clipPath = `polygon(0 0,calc(${percentage}% - 8px) 0,${percentage}% 50%,calc(${percentage}% - 8px) 100%,0 100%,8px 50%)`;

  return (
    <div className='Skill'>
      <div className='Skill__Name'>{name}</div>
      {native
        ? <div className='Skill__Native'>{t('skillsSections.labels.native')}</div>
        : <>
          <div className='Skill__RibbonContainer'>
            <div className='Skill__RibbonContainer__Percentage' style={{ clipPath }}></div>
          </div>
          <div className='Skill__Percentage'>{percentage}%</div>
        </>}

    </div>
  )
}