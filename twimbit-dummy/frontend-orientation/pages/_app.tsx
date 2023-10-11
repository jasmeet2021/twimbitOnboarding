import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ApolloProvider } from '@apollo/client';
import { client } from 'frontend-orientation/utils/apolloClient';

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      navigate={(to)=>{
        window.location.href = to
      }}
    >
      <Head>
        <title>Welcome to frontend-orientation!</title>
      </Head>
      <main className="app">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </ClerkProvider>
  );
}

export default CustomApp;
