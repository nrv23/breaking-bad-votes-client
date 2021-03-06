import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  
  const uri = 'http://localhost:5000/graphql'; // <-- add the URL of the GraphQL server here
  const wsClient = new WebSocketLink({
    uri: `ws://localhost:5000/graphql`,
    options: {
      reconnect: true,
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // capturar errores de red o de graphql

    if (graphQLErrors) {
      console.log({ graphQLErrors }); // error de graphQLErrors
    }

    if (networkError) {
      console.log({ networkError }); // error de networkError
    }
  });

  const http = ApolloLink.from([errorLink, httpLink.create({ uri })]); // pasar la instancia de error y conexion
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: any = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsClient,
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
