import '@/styles/globals.css';
// import {client} from '@/graphql/client';
import { ApolloProvider } from '@apollo/client';

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    
    // <ApolloProvider client={client}>
    <Component {...pageProps} />
    // </ApolloProvider>
  );
};

export default App;