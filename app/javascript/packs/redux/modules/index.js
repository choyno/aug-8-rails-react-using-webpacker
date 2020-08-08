import { combineReducers } from 'redux'
// reducerImports   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import todo from './todo/todoReducer'
import todos from './todo/todoReducer'

const reducer = combineReducers({
  todo,
  todos
});

export default reducer

