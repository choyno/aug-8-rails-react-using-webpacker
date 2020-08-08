// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { CREATE_TODO } from './todoTypes';
import { GET_TODOS } from './todoTypes';

// Action Creators   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)

export function createTodo(data) {
  return { type: CREATE_TODO , payload: data };
}

export function getTodos(data) {
  return { type: GET_TODOS , payload: data };
}

