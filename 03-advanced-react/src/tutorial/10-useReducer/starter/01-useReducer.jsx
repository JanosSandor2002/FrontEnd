import React from 'react';
import { useReducer } from 'react';
import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from './actions';
import reducer from './actions';
import { data } from '../../../data';
const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_LIST, payload: { id } });
    //let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
  };
  function resetAll() {
    dispatch({ type: RESET_LIST });
    //setPeople(data);
  }
  function clearList() {
    dispatch({ type: CLEAR_LIST });
    //setPeople([])
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetAll}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
