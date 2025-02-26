import picture from '../../assets/Picture.png'
import './ProfilePicture.css'

export function ProfilePicture () {
  return (
    <img
      className='ProfilePictureComponent'
      src={picture}
    />
  );
}