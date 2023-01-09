import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>Beautifuls Recipe App</title>
            <meta
               name='Recipe app for my wife'
               content='Nextjs, Tailwind, Spoonacular'
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
