// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { CREATE_TODO } from './todoTypes';
import { GET_TODOS } from './todoTypes';


const INITIAL_STATE = {
  todos: [],
  processing: false,
  updating: false
}

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_TODOS:
    case CREATE_TODO:
      return state;
    case `${CREATE_TODO}_SUCCESS`:
      return {
        todos: [...state.todos, action.payload],
        processing: false,
        updating: false
      }
    case `${GET_TODOS}_SUCCESS`:
      return {
        todos: action.payload,
        processing: false,
        updating: false
      }
    case `${CREATE_TODO}_FAIL`:
    case `${GET_TODOS}_FAIL`:
      // Perform action
      return state;
    default: return state;
  }
}

