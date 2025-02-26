import './SideBar.css';

export function SideBar (props) {
  const {
    children,
  } = props;

  return (
    <div className={'SideBar'}>
      {children}
    </div>
  )
}