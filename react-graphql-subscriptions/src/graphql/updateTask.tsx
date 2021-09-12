import gql from 'graphql-tag'

export default gql`
mutation update($id: ID!, $input: CreateInput!) {
  update(id: $id, input: $input) {
    id
    title
    text
  }
}
`