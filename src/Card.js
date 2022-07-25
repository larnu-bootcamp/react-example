import { useEffect, useState } from 'react';
import './Card.css';

function Card(props) {

  const [name, updateName] = useState(props.name);  

  useEffect(() => {
    console.log(name);
  })

  function changeName() {
    updateName(name.toLowerCase());
  }

  return (
    <div className="tarjeta" onClick={changeName}>
      <div className="tarjeta__imagen">
        <img
          className="tarjeta__imagen-background"
          src={props.background}
          alt={props.name}
        />
        <img
          className="tarjeta__imagen-icono"
          src={props.icon}
          alt={props.name}
        />
      </div>
      <div className="tarjeta__parrafo">
        <h3 className="tarjeta__titulo">{name}</h3>
        <p className="tarejta__texto">Total Quizzes: {props.totalQuizzes}</p>
        <p className="tarejta__texto">User: {props.users}</p>
        <a href="https://larnu.app/" target="_blank"  className="btn btn-primary">Go to Larnu</a>
      </div>
    </div>
  );
}

export default Card;
