import out from 'out';

out('hello');
out('hello', 1);
out('hello', 2);

// $FlowExpectedError
out({});

// $FlowExpectedError
out(5);

/* check out.to function */

out.to([process.stdout]);
out.to([]);

// $FlowExpectedError
out.to();

