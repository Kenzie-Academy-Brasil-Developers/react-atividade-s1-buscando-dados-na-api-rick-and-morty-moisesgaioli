import './App.css';
import Characters from './components/Characters';
import { useEffect, useState } from 'react';

function App() {

  const [characterList, setCharacterList] = useState([]);

  useEffect (() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(response => setCharacterList(response.results))
    .catch(error => console.log(error));
  }, []);

  return (
      <main className="main-container">

        <Characters characterList={characterList} />

      </main>
  );
}

export default App;
