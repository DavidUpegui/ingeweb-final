import client from "@/hooks/useApolloClient";
import "@/styles/globals.css";
// import {client} from '@/graphql/client';
import { ApolloProvider } from "@apollo/client";
import Layout from "@/components/Layout";

const App = ({
	Component,
	pageProps: { session, ...pageProps },
	...appProps
}: any) => {
	if ([`/login`].includes(appProps.router.pathname))
		return (
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		);

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
};

export default App;
