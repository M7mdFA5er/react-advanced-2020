import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('clean up :>> ');
      window.removeEventListener('resize', checkSize);
    }
  }, []);


  return (
    <>
      <h2>Window:  <span>{size} px</span> </h2>
    </>
  );
};

export default UseEffectCleanup;
