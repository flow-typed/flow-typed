import next from "next";
import Link from 'next/link'
import Prefetch from 'next/prefetch'
import Head from 'next/head'
import Router from 'next/router'
import Document, {Main, Head as DocumentHead, NextScript} from "next/document"
const { createServer } = require('http')
const { parse } = require('url')

// server
const app = next({ dev: true, dir: ".", quiet: false});
const handle = app.getRequestHandler()
app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/') {
      app.render(req, res, '/index', query)
    } else if (pathname === '/foo') {
      app.render(req, res, '/index', query)
    } else if (pathname === '/about') {
      app.render(req, res, '/about', query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen("3500", (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3500')
  })
});

<Head>
  <meta charSet='utf-8' />
</Head>;

<Link href='/'>Index</Link>;
<Prefetch href='/'>Prefetch</Prefetch>;
<Prefetch href='/' prefetch={false}>Prefetch</Prefetch>;

// $ExpectError
<Link href={1}>InvalidNumLink</Link>|
// $ExpectError
<Prefetch href='/' prefetch={() => {}}>Prefetch</Prefetch>;

Router.onRouteChangeStart = (url: string) => {};
Router.onRouteChangeStart = null;

Router.onRouteChangeComplete = (url: string) => {};
Router.onRouteChangeComplete = null;

Router.onRouteChangeError = (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled!`)
  }
}

Router.push('/about');
Router.push('/about', '/');
Router.replace('/about');
Router.replace('/about', '/');

const r: string = Router.route;
const p: string = Router.pathname;
const q: {} = Router.query;

export default class TestDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
    return { ...props, customValue: 'hi there!' }
  }

  render () {
    return (
     <html>
       <DocumentHead>
       </DocumentHead>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
