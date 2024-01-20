import './ColorBox.css';
function ColorBox({ color, name }) {
  return (
    <div style={{backgroundColor: color }} className="ColorBox">{name}</div>
  )
}

export default ColorBox;