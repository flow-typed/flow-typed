import out from 'out';

out('hello');
out('hello', 1);
out('hello', 2);

// $ExpectError
out({});

// $ExpectError
out(5);

/* check out.to function */

out.to([process.stdout]);
out.to([]);

// $ExpectError
out.to();

