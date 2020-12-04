// @flow

import RoutesBuiler, { type Routes } from 'next-routes';

const routes: Routes = RoutesBuiler();

// $FlowExpectedError
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

// $FlowExpectedError
RoutesBuiler({ Link: null, Router: null});

// $FlowExpectedError
RoutesBuiler({});

// $FlowExpectedError
Router.pushRoute();

// $FlowExpectedError
Router.replaceRoute();

// $FlowExpectedError
Router.prefetchRoute();

// $FlowExpectedError
Router.events.on('unknown', (url: string) => {});
// $FlowExpectedError
Router.events.off('unknown', (url: string) => {});

Router.events.on('routeChangeStart', (url: string) => {});
Router.events.off('routeChangeStart', (url: string) => {});

Router.events
  .on("routeChangeStart", (url: string) => {})
  .on("routeChangeComplete", (url: string) => {})
  .on("routeChangeError", () => {});
