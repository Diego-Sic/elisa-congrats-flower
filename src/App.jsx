import { useState } from 'react'
import heroImg from './assets/hero.png'
import ASCII_ROSE from './assets/rose.txt?raw'
import './App.css'

const COLORS = [
  { hex: '#ff6b9d', glow: 'rgba(255,107,157,0.55)', label: 'Rose' },
  { hex: '#ef233c', glow: 'rgba(239,35,60,0.55)',   label: 'Crimson' },
  { hex: '#c77dff', glow: 'rgba(199,125,255,0.55)', label: 'Lavender' },
  { hex: '#ffd166', glow: 'rgba(255,209,102,0.55)', label: 'Gold' },
  { hex: '#06d6a0', glow: 'rgba(6,214,160,0.55)',   label: 'Jade' },
  { hex: '#74b9ff', glow: 'rgba(116,185,255,0.55)', label: 'Sky' },
  { hex: '#fd8c65', glow: 'rgba(253,140,101,0.55)', label: 'Coral' },
  { hex: '#f72585', glow: 'rgba(247,37,133,0.55)',  label: 'Magenta' },
]

function App() {
  const [colorIndex, setColorIndex] = useState(0)
  const [roseVisible, setRoseVisible] = useState(false)

  const handlePress = () => {
    if (!roseVisible) {
      setRoseVisible(true)
    } else {
      setColorIndex((prev) => (prev + 1) % COLORS.length)
    }
  }

  const current = COLORS[colorIndex]

  return (
    <main className="app-container">
      <img src={heroImg} alt="Peony flower" className="hero-image" />

      {/* Top: greeting text */}
      <div className="greeting">
        <span className="greeting-line">Congratulations,</span>
        <span className="greeting-name">Elisa,</span>
        <span className="greeting-line">for your presentation.</span>
      </div>

      {/* Middle: rose button */}
      <div className="rose-section">
        {roseVisible && (
          <div className="rose-box">
            <pre
              className="ascii-rose"
              style={{
                color: current.hex,
                textShadow: `0 0 8px ${current.glow}, 0 0 20px ${current.glow}`,
              }}
            >
              {ASCII_ROSE}
            </pre>
          </div>
        )}

        <button
          className="rose-btn"
          onClick={handlePress}
          aria-label={roseVisible ? 'Change rose color' : 'Show rose'}
        >
          {roseVisible ? `Change color — ${current.label}` : '🌹 Tap me'}
        </button>
      </div>
    </main>
  )
}

export default App
