import connectRoute from 'connect-route';

// $ExpectError
connectRoute('router');

connectRoute((router) => {
  // $ExpectError
  router.get(2);
});
