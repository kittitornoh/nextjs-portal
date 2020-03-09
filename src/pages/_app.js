import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import store from "../stores/rootStore";
import theme from "../theme";

export default withRedux(store, { debug: true })(
  class InxiteHaloApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Provider store={store}>
          <Head>
            <title>Inxite Halo</title>
            <meta
              name='viewport'
              content='minimum-scale=1, initial-scale=1, width=device-width'
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      );
    }
  }
);
