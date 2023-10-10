import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ClerkProvider } from '@clerk/nextjs';

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
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
}

export default CustomApp;
