import gql from 'graphql-tag'

export default gql`
query searchList($input: SearchInput){
  searchList(input:$input) {
    data{
      id
      title
      text
      completed
    }
    count
  }
}
`