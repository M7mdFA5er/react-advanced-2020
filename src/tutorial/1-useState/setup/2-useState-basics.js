import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('random title');
  const handleClick = () => {
    setText('Hello From React UseState');
    console.log('title :>> ', text);
  }
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>Change Title</button>
    </>
  );
};

export default UseStateBasics;
