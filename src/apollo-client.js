import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: "https://better-skin.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "KZM7U8txqWCGRY0rlkkHCahtq9K7GXW71qFKbo201z8KGUwdrPwgz60dkbtLooDh",
    },
});

const wsLink = new WebSocketLink({
    uri: "wss://better-skin.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": "KZM7U8txqWCGRY0rlkkHCahtq9K7GXW71qFKbo201z8KGUwdrPwgz60dkbtLooDh",
            },
        },
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
