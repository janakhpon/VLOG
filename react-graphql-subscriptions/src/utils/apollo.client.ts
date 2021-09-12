import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import authLink from './authlink'

const httpLink = new HttpLink({
    uri: 'http://localhost:3001/graphql',
});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:3001/graphql',
    options: {
        reconnect: true,
    },
});

const link = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
        definition.kind === 'OperationDefinition'
        && definition.operation === 'subscription'
    );
}, wsLink, authLink.concat(httpLink));

const client = new ApolloClient({
    link: link,
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