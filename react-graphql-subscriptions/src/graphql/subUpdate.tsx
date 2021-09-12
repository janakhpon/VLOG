import gql from 'graphql-tag';

export default gql`
subscription notifyUpdate {
  todoUpdated {
    id
    title
    text
  }
}
`