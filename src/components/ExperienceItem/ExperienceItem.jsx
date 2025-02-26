import { useTranslation } from "react-i18next";
import './ExperienceItem.css';

export function ExperienceItem (props) {
  const {
    title,
    position,
    roleDescription,
    recognition
  } = props;

  const { t } = useTranslation();

  return (
    <div className='ExperienceItem'>
      <div className='ExperienceItem__Title'>{title}</div>
      <div className='ExperienceItem__Position'>{t('professionalExperience.labels.position')}: {position}</div>
      <div className='ExperienceItem__RoleDescription'>{t('professionalExperience.labels.roleDescription')}: {roleDescription}</div>
      <div className='ExperienceItem__Recognition'>{recognition}</div>
    </div>
  );
}