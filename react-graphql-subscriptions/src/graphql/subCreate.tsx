import gql from 'graphql-tag'

export default gql`
subscription notifyCreation {
  todoCreated{
    id
    title
    text
    completed
  }
}
`