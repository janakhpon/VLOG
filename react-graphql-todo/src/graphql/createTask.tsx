import gql from 'graphql-tag'

export default gql`
mutation create($input: CreateInput!){
  create(input: $input){
    id
    title
    text
    completed
  }
}
`