import './App.css';
import ColorPalette from './ColorPalette';
import palettes from './SeedColors';

function App() {
  return (
    <>
      <div className="page-container">
        <ColorPalette {...palettes[0]} />
      </div>
    </>
  )
}

export default App
