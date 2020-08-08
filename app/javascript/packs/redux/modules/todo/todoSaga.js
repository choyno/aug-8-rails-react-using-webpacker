import { put, call } from 'redux-saga/effects'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_TODOS } from './todoTypes';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function getTodosReq(data) {
  let url = "https://jsonplaceholder.typicode.com/todos"
  return axios.get(url)
}


// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* getTodos(action) {
  try {
    let response = yield call(getTodosReq, action.payload)
    yield put({ type: `${GET_TODOS}_SUCCESS`, payload: response.data })
  } catch(e) {
    yield put({ type: `${GET_TODOS}_FAIL`, payload: e.response })
  }
}


