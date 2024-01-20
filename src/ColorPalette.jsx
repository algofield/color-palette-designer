import ColorBox from './ColorBox';
import './ColorPalette.css';

function ColorPalette ({ colors }) {
  return (
    <div className="ColorPalette">
      {colors.map((color, i) => (
        <ColorBox key={i} {...color} />
      ))}
    </div>
  )
}

export default ColorPalette;