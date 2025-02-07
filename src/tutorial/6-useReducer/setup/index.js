import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

const defaultState = {
  pepole: [],
  isModelOpen: false,
  modelContent: ''
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <>
      {state.isModelOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      {state.pepole.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}>Remove</button>
          </div>
        )
      })}
    </>
  );
};

export default Index;
