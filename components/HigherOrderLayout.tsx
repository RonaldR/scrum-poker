import Head from 'next/head';
import Footer from './Footer';

const withLayout = (Page: any, title?: string) => {
  const pageTitle = `Scrum Poker ${title || ''}`;

  // eslint-disable-next-line react/display-name
  return () => (
    <main>
      <Head>
        <title>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          🃏
          {' '}
          {pageTitle}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>{pageTitle}</h1>
      <Page />
      <Footer />

      <style global jsx>
        {`
      body {
        margin: 0;
      }
      main {
        font-family: Helvetica;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0 8px;
      }
      .page {
        flex: 1;
      }`}
      </style>
    </main>
  );
};

export default withLayout;
