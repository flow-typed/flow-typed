import connectRoute from 'connect-route';

// $FlowExpectedError
connectRoute('router');

connectRoute((router) => {
  // $FlowExpectedError
  router.get(2);
});
