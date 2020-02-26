import Head from 'next/head';
import Footer from './Footer';

const withLayout = (Page: any, title?: string) => {
  const pageTitle = `Scrum Poker ${title || ''}`;

  // eslint-disable-next-line react/display-name
  return () => (
    <main>
      <Head>
        <title>
          {pageTitle}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <h1>{pageTitle}</h1>
      <Page />
      <Footer />

      <style global jsx>
        {`
        html, body {
          margin: 0;
        }
        
        main {
          font-family: Helvetica;
          margin: 0 8px;
          display: flex;
          flex-direction: column;
          min-height: -webkit-fill-available;
        }
        `}
      </style>
    </main>
  );
};

export default withLayout;
