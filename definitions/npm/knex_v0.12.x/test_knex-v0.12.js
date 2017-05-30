import Knex from 'knex';

const knex = Knex({});
// $ExpectError - invalid Client
Knex({
  client: 'foo',
});

knex.select('foo').withSchema('a').from('bar').where('foo', 2).orWhere('bar', 'foo').whereNot('asd', 1).whereIn('batz', [1, 2]);
knex.select(knex.raw(''))

knex.innerJoin('bar', function () { return this; });
knex.leftJoin('bar', function () { return this; });
knex.rightJoin('bar', function () { return this; });
knex.rightOuterJoin('bar', function () { return this; });
knex.fullOuterJoin('bar', function () { return this; });
knex.crossJoin('bar', function () { return this; });

knex('foo').insert({
  a: 1
});
knex('bar').del();
// $ExpectError
knex.from();

knex.destroy();
