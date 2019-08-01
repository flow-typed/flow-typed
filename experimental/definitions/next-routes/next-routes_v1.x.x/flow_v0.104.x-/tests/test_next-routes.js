// @flow

import RoutesBuiler, { type Routes } from 'next-routes';

const routes: Routes = RoutesBuiler();

// $ExpectError
routes.add();

const routesV2: Routes = routes.add('about')
  .add('blog', '/blog/:slug')
  .add('user', '/user/:id', 'profile')
  .add('/:noname/:lang(en|es)/:wow+', 'complex')
  .add({name: 'beta', pattern: '/v3', page: 'v3'});

const Router = routes.Router;

Router.pushRoute('blog', {slug: 'hello-world'});
Router.pushRoute('/blog/hello-world');

Router.replaceRoute('blog', {slug: 'hello-world'});
Router.replaceRoute('/blog/hello-world');

Router.prefetchRoute('blog', {slug: 'hello-world'});
Router.prefetchRoute('/blog/hello-world')

// $ExpectError
RoutesBuiler({ Link: null, Router: null});

// $ExpectError
RoutesBuiler({});

// $ExpectError
Router.pushRoute();

// $ExpectError
Router.replaceRoute();

// $ExpectError
Router.prefetchRoute();

// $ExpectError
Router.events.on('unknown', (url: string) => {});
// $ExpectError
Router.events.off('unknown', (url: string) => {});

Router.events.on('routeChangeStart', (url: string) => {});
Router.events.off('routeChangeStart', (url: string) => {});

Router.events
  .on("routeChangeStart", (url: string) => {})
  .on("routeChangeComplete", (url: string) => {})
  .on("routeChangeError", () => {});
