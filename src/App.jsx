import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <img src={heroImg} alt="Peony flower" className="hero-image" />

      <div className="greeting">
        <span className="greeting-line">Congratulations,</span>
        <span className="greeting-name">Elisa,</span>
        <span className="greeting-line">for your presentation.</span>
      </div>
    </main>
  )
}

export default App
