import './Boxes.css';
import { useEffect, useState } from 'react';
import Box from './Box';

function Boxes(params) {
  // este useEffect occurre cada vez que 
  // renderiza este componente.

  // este useEffect ocurre solo cuando la variable 
  // something sufre algún cambio
  // useEffect(() => {
  //   console.log('different');
  // }, [value]);

  // function boxClicked(brother) {
  //   updateCount(count + 1);
  // }

  const [count1, updateCount1] = useState(0);
  const [count2, updateCount2] = useState(0);
  const [count, updateCount] = useState(0);
  //TODO: crear variable que contenga al hijo 
  // más clickeado

  function childClicked(number, child) {
    console.log('child clicked');
    if (child === 1) {
      updateCount1(number);
    } else {
      updateCount2(number);
    }
    updateCount(count + 1);
    //TODO: acá deberiamos actualizar el estado de hijo
    // más clickeado
  }

  useEffect(() => {
    console.log(params);
    //consumir api con la id dada.
  })

  return (
    <div className="boxes">
      <Box name="box 1" count={count1} clicked={(number) => {
        childClicked(number, 1);
      }} />
      <Box name="box 2" count={count2} clicked={(number) => {
        childClicked(number, 2);
      }} />
      <br/>
      <p>Contador padre: {count}</p>
      {/* mostrar al hijo más clickeado */}
    </div>
  );
}

export default Boxes;
