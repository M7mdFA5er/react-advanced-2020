import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {

}

const defaultState = {
  pepole: [],
  isModelOpen: false,
  modelContent: 'Hi , My Name Is Mohamed'
}

const Index = () => {
  const [pepole, setPepole] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPepole([...pepole, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      setShowModal(true);
    }
  }

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      {pepole.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  );
};

export default Index;
