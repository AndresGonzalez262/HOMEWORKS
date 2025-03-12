import React, { useState, useCallback } from 'react';
import Son from './Son';

// Challenge 5

const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  const [lastNumber, setLastNumber] = useState(null);

  const increment = useCallback((num) => {
    setValor((prev) => prev + num);
    setLastNumber(num);
  }, []);

  return (
    <div>
      <h1>Cuenta</h1>
      <p>Total: {valor}</p>
      <p>Last clicked number: {lastNumber !== null ? lastNumber : "None"}</p>
      <hr />

      {list.map((n, idx) => (
        <Son key={idx} numero={n} increment={increment} />
      ))}
    </div>
  );
};

export default Father



