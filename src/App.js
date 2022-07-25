import './App.css';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import Cards from './Cards';

function App() {
  // este useEffect occurre cada vez que 
  // renderiza este componente.
  useEffect(() => {
    console.log('App');
  });

  // este useEffect ocurre solo cuando la variable 
  // something sufre algún cambio
  // useEffect(() => {
  //   console.log('different');
  // }, [value]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Cards/>
      <Counter/>
    </div>
  );
}

export default App;
