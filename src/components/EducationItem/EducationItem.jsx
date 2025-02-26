import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './EducationItem.css';

export function EducationItem (props) {
  const {
    title,
    description,
    recognition,

  } = props;

  return (
    <div className='EducationItem'>
      <div className='EducationItem__Title'>{title}</div>
      <div className='EducationItem__Description'>{description}</div>
      {recognition && <div className='EducationItem__Recognition'>{recognition}</div>}
    </div>
  );
}