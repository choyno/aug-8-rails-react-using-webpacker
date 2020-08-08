import { combineReducers } from 'redux'
// reducerImports   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import todo from './todo/todoReducer'

const reducer = combineReducers({
  todo,
});

export default reducer
