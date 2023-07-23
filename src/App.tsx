import './App.css'
import { useState, useCallback, useMemo } from 'react'
import logoImg from './assets/logo.png'

function App() {
  const [text, setText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const allTexts = useMemo( () => {
    return [
      {
        id: 1,
        category: 'motivação',
        texts: [
          'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.',
          'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
          'Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?',
        ]
      },
      {
        id: 2,
        category: 'bem estar',
        texts: [
          'Cultive pensamentos bons, rodeie-se de pessoas positivas e fique de bem com a vida.',
          'É maravilhoso ver o sorriso das pessoas que estão de bem com a vida.',
          'Estar de bem com a vida não é viver sem dificuldades, mas saber lidar com elas sem pensar em desistir.',
          'Estar de bem com a vida é saber reconhecer as infinitas razões que existem à nossa volta para sermos felizes.',
        ]
      }
    ];
  }, []);

  const handleText = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * allTexts[selectedCategory].texts.length);
    setText(allTexts[selectedCategory].texts[randomNumber]);
  }, [allTexts, selectedCategory])

  function handleCategory(index: number) {
    setSelectedCategory(index);
  }

  return (
    <div className="container">
      <img 
        src={logoImg} 
        alt="logo dev imagens"
        className="C-img"
        />

        <h1 className="C-title">categorias</h1>

        <section className="C-buttons">
          {allTexts.map( (item, index) => (
            <button
              key={item.id} 
              className="C-button"
              style={{
                borderWidth: item.category === allTexts[selectedCategory].category ? 2 : 0,
                borderColor: "#1fa4db"
              }}
              onClick={() => handleCategory(index)}>
              {item.category}
            </button>
          ) )}
        </section>

        <button className="C-standatd_button" onClick={handleText}>gerar frase</button>

        {text !== "" && <p className="C-text">"{text}"</p>}

    </div>
  )
}

export default App
