export const CLEAR_LIST = 'CLEAR_LIST';
export const RESET_LIST = 'RESET_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
import { data } from '../../../data';

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_LIST) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error('no matching ');
};

export default reducer;
