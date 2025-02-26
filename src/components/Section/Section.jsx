import './Section.css';

export function Section (props) {
  const {
    children,
    title,
  } = props;

  return (
    <div className='Section'>
      <div className='Section__Ribbon'>
        {title}
      </div>
      {children}
    </div>
  )
}