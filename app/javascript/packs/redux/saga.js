import { all, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

// actionTypes   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { CREATE_TODO  } from './modules/todo/todoTypes.js';
import { GET_TODOS  } from './modules/todo/todoTypes.js';

// sagaActions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { createTodo  } from './modules/todo/todoSaga.js';
import { getTodos  } from './modules/todo/todoSaga.js';

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    takeLatest(CREATE_TODO, createTodo),
    takeLatest(GET_TODOS, getTodos),
  ])
}

