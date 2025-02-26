import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ContacDetailsItem.css';

export function ContacDetailsItem (props) {
  const {
    icon,
    description,
    href = null,
  } = props;

  const { t } = useTranslation();

  return (
    <div className='ContacDetailsItem'>
      {icon && (
        <div className="ContacDetailsItem__Icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {href
      ? <a className='ContacDetailsItem__Anchor' href={href} target="_blank">{description}</a>
      : <div className='ContacDetailsItem__Description'>{description}</div>
      }
      
    </div>
  );
}