import gql from 'graphql-tag';

const GET_TODOS = gql`
  query todos($isDeleted: Boolean!) {
    todos(isDeleted: $isDeleted){
       id
       title
       description
       isDeleted
    }
  }
`

const CREATE_TODO = gql`
  mutation createTodo($title: String, $description: String) {
 		createTodo(	input: {
      title: $title
      description: $description
    }){
      todo {
        id
        title
        description
        isDeleted
      }
    }
  }
`
 export const queries = {
   GET_TODOS,
   CREATE_TODO
 }

