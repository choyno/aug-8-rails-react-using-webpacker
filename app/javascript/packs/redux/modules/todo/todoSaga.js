import { put, call } from 'redux-saga/effects'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { CREATE_TODO } from './todoTypes';
import { GET_TODOS } from './todoTypes';
import { queries } from './todoQueries';

import useQuery from '../../../hooks/useQuery';
import useMutation from '../../../hooks/useMutation';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)

function* createTodoReq(data) {
  return yield call(useMutation, queries.CREATE_TODO, data);
}

function* getTodosReq(data) {
  return yield call(useQuery, queries.GET_TODOS, data);
}

// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* createTodo(action) {
  try {
    const { data: { createTodo: { todo } } } = yield call(createTodoReq, action.payload);
    yield put({ type: `${CREATE_TODO}_SUCCESS`, payload: todo })
  } catch(e) {
    yield put({ type: `${CREATE_TODO}_FAIL`, payload: e.response })
  }
}

export function* getTodos(action) {
  try {
    const { data: { todos } } = yield call(getTodosReq, action.payload);
    yield put({ type: `${GET_TODOS}_SUCCESS`, payload: todos })
  } catch(e) {
    yield put({ type: `${GET_TODOS}_FAIL`, payload: e.response })
  }
}


