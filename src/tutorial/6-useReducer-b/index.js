import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  // we could name dispatch whatever we wanted

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      // it is a naming convention that action types should be strings in all upper case with underscores
      // meaning of payload is actual information or message
      // Now in the reducer you have access to that action object you passed into dispatch . From that object you can access the properties type and payload via dot notation like this: action. type action. payload. Then you simply catch the matching action.
      setName('');
    } 
    else {
      dispatch({ type: 'NO_VALUE' });
      // dispatch() is the method used to dispatch actions and trigger state changes to the store
    }
  };
  
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;