import gql from 'graphql-tag';

export default gql`
subscription notifyDelete {
  todoDeleted
}
`