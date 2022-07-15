import { useState, useEffect } from 'react'

import axios from 'axios'

import './App.css'

function App() {
  const [simpsons, setSimpsons] = useState(' ')

  useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => setSimpsons(res.data[0]))
  }, []);

  const handleClick = (() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => setSimpsons(res.data[0]))
  })

  return (
    <div className="app">
      <section className="section">
        <div className="container">
          <h1 className="title">Simpsons API</h1>

          <div className={simpsons.characterDirection === 'Right' ? 'content' : 'content reverse'} id="simpsonsContent">
            {console.log(simpsons)}
            <div className="charInfo">
              <h1 className="charName">{simpsons.character}</h1>
              <p className="quote">{simpsons.quote}</p>
            </div>
            <div className="imageContainer">
              <img src={simpsons.image} className="image" alt={simpsons.character} />
            </div>
          </div>

          <button className="generateQuote" onClick={handleClick}>One more!</button>
        </div>
      </section>
    </div>
  );
}

export default App;
