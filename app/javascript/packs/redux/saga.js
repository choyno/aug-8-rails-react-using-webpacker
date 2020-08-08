import { all, takeLatest, setContext } from 'redux-saga/effects';

// actionTypes   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_TODOS  } from './modules/todo/todoTypes.js';

// sagaActions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { getTodos  } from './modules/todo/todoSaga.js';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_TODOS, getTodos),
  ])
}
