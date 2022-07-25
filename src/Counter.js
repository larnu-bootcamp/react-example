import { useEffect, useState } from 'react';

function Counter() {

  const [count, updateCount] = useState(0);

  useEffect(() => {
    console.log('Counter renderizado');
  })

  function onClick() {
    updateCount(count + 1);
  }

  return (
    <div>
      <p>
        Nuestro contador es: {count}
      </p>
      <button onClick={onClick}>Aprietame</button>
    </div>
  );
}

export default Counter;
