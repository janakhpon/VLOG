import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import authLink from './authlink'

const httpLink = new HttpLink({
    uri: 'http://localhost:3001/graphql',
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        addTypename: false
    }),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        }
    }
});

export default client;