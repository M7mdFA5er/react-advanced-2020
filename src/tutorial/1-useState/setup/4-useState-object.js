import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Moahmed',
    age: 28,
    message: 'I will Be a Great Developer'
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'Keep Learn !' });
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
