import React, { useState } from 'react';
import Deck from './Deck';
import './styles.css';







function App() {
  const [cards, setCards] = useState([])

  function saveSpread(e) {
    const item = e.target.value;
    console.log(item);
    setCards([...cards, item]);
  }

return (
  <>
  <button onClick={saveSpread} id="a" >Deal</button>
  <Deck>
  </Deck>
  </>
)
}

export default App;