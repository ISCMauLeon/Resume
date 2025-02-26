import './VerticalSpacer.css';

export function VerticalSpacer (props) {
  const {
    height,
  } = props;

  return (
    <div className='VerticalSpacer' style={{height: `${height}px`}}></div>
  )
}