import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <img src={heroImg} alt="Peony flower" className="hero-image" />
      <p className="greeting">
        Congratulations, Elisa, for your presentation.
      </p>
    </main>
  )
}

export default App
