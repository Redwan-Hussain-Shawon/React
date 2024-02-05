
import React from 'react';

function Count({ click, clicks }) {
  return (
    <>
      <button onClick={click}>Click</button>
      <p>{clicks}</p>
    </>
  );
}

export default Count;
