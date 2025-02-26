import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { useTranslation } from 'react-i18next';

import './Header.css';

export function Header() {
  const { t } = useTranslation();

  return (
    <div className='HeaderComponent'>
      <div className='HeaderComponent__Chevron' />
      <div className='HeaderComponent__ProfilePicture'>
        <ProfilePicture />
      </div>
      <div className='HeaderComponent__Title'>
        <h2>{t('personalInformation.name')}</h2>
        <span>{t('personalInformation.title')}</span>
      </div>  
    </div>
  );
}