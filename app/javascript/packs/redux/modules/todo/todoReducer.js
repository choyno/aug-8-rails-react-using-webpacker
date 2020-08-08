// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_TODOS } from './todoTypes';

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_TODOS:
      // Perform action
      return state;
    case `${GET_TODOS}_SUCCESS`:
      // Perform action
      return state;
    case `${GET_TODOS}_FAIL`:
      // Perform action
      return state;
    default: return state;
  }
}

