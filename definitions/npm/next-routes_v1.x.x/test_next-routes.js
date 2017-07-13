import RoutesBuiler, { type Routes } from 'next-routes';

const Router: Routes = RoutesBuiler();

// $ExpectError
Router.add();

const routerV2: Routes = Router.add('about')
.add('blog', '/blog/:slug')
.add('user', '/user/:id', 'profile')
.add('/:noname/:lang(en|es)/:wow+', 'complex')
.add({name: 'beta', pattern: '/v3', page: 'v3'});

Router.pushRoute('blog', {slug: 'hello-world'});
Router.pushRoute('/blog/hello-world');

Router.replaceRoute('blog', {slug: 'hello-world'});
Router.replaceRoute('/blog/hello-world');

Router.prefetchRoute('blog', {slug: 'hello-world'});
Router.prefetchRoute('/blog/hello-world')

RoutesBuiler({ Link: null, Router: null});

// $ExpectError
RoutesBuiler({});

// $ExpectError
Router.pushRoute();

// $ExpectError
Router.replaceRoute();

// $ExpectError
Router.prefetchRoute();
