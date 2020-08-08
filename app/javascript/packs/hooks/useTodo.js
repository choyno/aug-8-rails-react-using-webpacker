import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  getTodos,
  createTodo,

} from '../redux/modules/todo/todoActions';

export default () => {

  const dispatch = useDispatch();
  const { todos, processing, updating } = useSelector(state => state); // from saga initial state deconstucting

  return {
    todos,
    processing,
    updating,
    getTodos(data){
      dispatch(getTodos(data));
    },
    createTodo(data){
      dispatch(createTodo(data));
    },
  };
}

