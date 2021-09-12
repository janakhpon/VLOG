import gql from 'graphql-tag'

export default gql`
query list($page: Int, $take: Int, $sort: String, $order: SortType) {
    list(page: $page, take: $take, sort: $sort, order: $order){
      id
      title
      text
      completed
    }
  }
`


