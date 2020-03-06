import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <head>
          <link rel='icon' href='/favicon.png' />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&display=swap'
            rel='stylesheet'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='description'
            content='Inxite running on the new Halo system'
          />
          <title>Inxite Halo</title>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
