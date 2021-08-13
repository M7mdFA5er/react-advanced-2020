import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call UseEffect');
    document.title = `New Notifications(${value})`;
  });

  console.log('render Component :>> ');
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => { setValue(value + 1) }}>increase</button>
    </>
  );
};

export default UseEffectBasics;
