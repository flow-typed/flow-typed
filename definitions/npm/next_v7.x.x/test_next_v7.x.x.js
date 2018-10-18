import React from "react";
import next, {type Context} from "next";
import Link from "next/link";
import Head from "next/head";
import Router, {type RouteError} from "next/router";
import Document, {Head as DocumentHead, Main, NextScript} from "next/document";
import App, {type AppInitialProps, Container} from "next/app";
import dynamic from "next/dynamic";

const { createServer } = require("http");
const { parse } = require("url");

// server
// $ExpectError
next({ dev: 1 });
// $ExpectError
next({ dir: false });
// $ExpectError
next({ quiet: "derp" });
// $ExpectError
next({ staticMarkup: 42 });

const app = next({ dev: true, dir: ".", quiet: false });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    let q: Object | void;

    if (typeof query === "object") {
      q = query;
    }

    if (pathname === "/") {
      app.render(req, res, "/index", q);
    } else if (pathname === "/foo") {
      app.render(req, res, "/index", q);
    } else if (pathname === "/about") {
      app.render(req, res, "/about", q);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen("3500", err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3500");
  });
});

app.setAssetPrefix('');

<Head>
  <meta charSet="utf-8" />
</Head>;

<Link href="/">Index</Link>;

// $ExpectError
<Link href={1}>InvalidNumLink</Link>;

// $ExpectError
Router.onRouteChangeStart = {};

Router.events.on('routeChangeStart', (url: string) => {});
Router.events.off('routeChangeStart', (url: string) => {});

Router.events.on('routeChangeComplete', (url: string) => {});
Router.events.off('routeChangeComplete', (url: string) => {});

Router.events.on('routeChangeError', (err: RouteError, url: string) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled!`);
  }
});

// $ExpectError
Router.push({});

Router.push("/about");
Router.push("/about", "/");
Router.push("/about", "/", { shallow: true });
Router.replace("/about");
Router.replace("/about", "/");
Router.prefetch("/dynamic");

Router.beforePopState(({ url, as, options }) => true);

const r: string = Router.route;
const p: string = Router.pathname;
const q: {} = Router.query;

export default class TestDocument extends Document {
  static async getInitialProps(ctx: Context) {
    const props = await Document.getInitialProps(ctx);
    return { ...props, customValue: "hi there!" };
  }

  render() {
    return (
      <html>
        <DocumentHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export class TestApp extends App {
  static async getInitialProps({ Component, router, ctx }: AppInitialProps) {
    const props = await Component.getInitialProps(ctx);
    return { ...props }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

const DynamicComponent = dynamic(() => import('./test_next_v7.x.x'));

const DynamicComponentWithCustomLoading = dynamic(() => import('./test_next_v7.x.x'), {
  loading: () => <p>...</p>
});

const DynamicComponentWithNoSSR = dynamic(() => import('./test_next_v7.x.x'), {
  ssr: false
});

const HelloBundle = dynamic({
  modules: () => {
    return {
      Hello1: () => import('./test_next_v7.x.x'),
      Hello2: () => import('./test_next_v7.x.x')
    }
  },
  render: (props, { Hello1, Hello2 }) =>
    <div>
      <Hello1 />
      <Hello2 />
    </div>
});
