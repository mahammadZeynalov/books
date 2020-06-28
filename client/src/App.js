import React from 'react';
import apolloClient from './apolloSetup';
import { ApolloProvider } from 'react-apollo';
import Books from './components/Books';

function App() {
  return (
    <ApolloProvider client={apolloClient} >
      <Books />
    </ApolloProvider>
  );
}

export default App;
