import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  return (
    <>
      {/* <h2>{firstValue}</h2> */}
      {/* <h2>Value : {secondValue}</h2> */}
      <hr />
      <h1> {text || 'John doe'}  </h1>
      <button className="btn" onClick={() => setIsError(!isError)}>Toggle error</button>
      {isError && <h1>Error</h1>}
      {isError ? <p>There is an error...</p> : ''}
    </>
  );
};

export default ShortCircuit;
