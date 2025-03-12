import React, { memo } from 'react';

// Challenge 5

const Son = memo(({ numero, increment }) => {
  console.log('again reloaded...');

  return (
    <button
      className='btn btn-primary mr-3'
      onClick={() => increment(numero)}
    >
      {numero}
    </button>
  );
});

export default Son
