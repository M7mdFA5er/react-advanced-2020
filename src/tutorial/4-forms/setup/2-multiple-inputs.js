import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value }); //Dynamice Object Proprities
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName('');
  //     setEmail('');
  //   } else {
  //     console.log('empty values');
  //   }
  // };
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handelChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handelChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handelChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
