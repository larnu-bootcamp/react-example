import './Box.css';

function Box(props) {

  return (
    <div onClick={() => {
      props.clicked(props.count + 1);
    }}>
      <p>{props.name}</p>
      <p>count: {props.count}</p>
    </div>
  );
}

export default Box;
