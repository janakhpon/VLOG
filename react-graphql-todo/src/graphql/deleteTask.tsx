import gql from 'graphql-tag'

export default gql`
mutation deleteTask($id: ID!) {
  delete(id: $id) {
    message
  }
}
`