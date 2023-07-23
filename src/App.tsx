import './App.css'

import logoImg from './assets/logo.png'

function App() {

  return (
    <div className="container">
      <img 
        src={logoImg} 
        alt="logo dev imagens"
        className="C-img"
        />

        <h1 className="C-title">categorias</h1>

        <section className="C-buttons">
          <button className="C-button">motivação</button>
          <button className="C-button">bem estar</button>
        </section>

        <button className="C-standatd_button">gerar frase</button>

        <p className="C-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id eius vel ut eos commodi sapiente tempora consequuntur repellendus iusto delectus recusandae totam, non, accusantium odio asperiores officiis ipsam voluptas maiores.</p>
    </div>
  )
}

export default App
