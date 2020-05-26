import Knex from 'knex';

const knex = Knex({});
// $ExpectError - invalid Client
Knex({
  client: 'foo',
});

knex
  .clearSelect()
  .clearWhere()
  .select('foo')
  .avg('bar.n')
  .avg('bar.c as c_avg')
  .avgDistinct('bar.u')
  .count('bar.n')
  .count('bar.c as c_count')
  .countDistinct('bar.u')
  .max('bar.foo')
  .max('bar.foo as bar2')
  .max({ bar3: 'bar' })
  .min('bar.foo')
  .min('bar.foo as bar2')
  .min({ bar3: 'bar' })
  .sum('bar.n')
  .sumDistinct('bar.n')
  .withSchema('a')
  .from('bar')
  .where('foo', 2)
  .where({ mixed: 'hi' })
  .orWhere('bar', 'foo')
  .orWhereNull('bar')
  .orWhereIn('bar', ['foo', 'buzz'])
  .orWhereBetween('bar', [0, 5])
  .orWhereNot('bar', 'foo')
  .orWhereNotNull('bar')
  .orWhereNotIn('bar', ['foo', 'buzz'])
  .orWhereRaw('bar = :buzz', { buzz: 3 })
  .andWhere('bar', 'foo')
  .andWhereBetween('bar', [0, 5])
  .andWhereNot('bar', 'foo')
  .andWhereRaw('bar = :buzz', { buzz: 3 })
  .whereNot('asd', 1)
  .whereIn('batz', [1, 2])
  .whereNotIn('bar', ['foo', 'buzz'])
  .whereNull('bar')
  .whereNotNull('baz')
  .groupBy('foo')
  .groupBy('buzz', 'baz')
  .groupByRaw('COUNT(DISTINCT baz), boo')
  .orderBy('foo', 'desc')
  .orderBy(['foo', 'bar', 'baz'])
  .orderByRaw('buzz DESC NULLS LAST')
  .limit(100)
  .offset(200);

knex.select(knex.raw(''));

// Joins with Knex$QueryBuilderFn
knex.join('bar', function() {
  return this;
});
knex.innerJoin('bar', function() {
  return this;
});
knex.leftJoin('bar', function() {
  return this;
});
knex.rightJoin('bar', function() {
  return this;
});
knex.rightOuterJoin('bar', function() {
  return this;
});
knex.fullOuterJoin('bar', function() {
  return this;
});
knex.crossJoin('bar', function() {
  return this;
});

// Joins with column refs
knex.join('baz', 'baz.id', 'bar.baz_id');
knex.innerJoin('baz', 'baz.id', 'bar.baz_id');
knex.leftJoin('baz', 'baz.id', 'bar.baz_id');
knex.rightJoin('baz', 'baz.id', 'bar.baz_id');
knex.rightOuterJoin('baz', 'baz.id', 'bar.baz_id');
knex.fullOuterJoin('baz', 'baz.id', 'bar.baz_id');
knex.crossJoin('baz');
// Note: Cross join with conditions only supported in MySQL and SQLite3
knex.crossJoin('baz', 'baz.id', 'bar.baz_id');

// Joins with object condition map
knex.join('boz', { 'boz.id': 'bar.baz_id' });
knex.innerJoin('boz', { 'boz.id': 'bar.baz_id' });
knex.leftJoin('boz', { 'boz.id': 'bar.baz_id' });
knex.rightJoin('boz', { 'boz.id': 'bar.baz_id' });
knex.rightOuterJoin('boz', { 'boz.id': 'bar.baz_id' });
knex.fullOuterJoin('boz', { 'boz.id': 'bar.baz_id' });
// $ExpectError - crossJoin can not use the object condition map syntax
knex.crossJoin('boz', { 'boz.id': 'bar.baz_id' });

knex('foo').insert({
  a: 1,
});
knex('foo').truncate();
knex('bar').del();
// $ExpectError
knex.from();

knex.table('foo');

knex.destroy();

/**
 * Promise interface
 */
knex
  .select('foo')
  .from('bar')
  .then(function(result) {})
  .then(function(result) {}, function(err) {})
  .catch(function(err) {});

knex
  .transaction(function(trx) {
    trx
      .insert({ a: 1 })
      .into('foo')
      .transacting(trx)
      .then(trx.commit)
      .catch(trx.rollback);
  })
  .then(function(result) {})
  .catch(function(err) {});

knex.transaction(function(trx) {
  trx.rollback();
});

knex.transaction(async trx => {
  await trx('foo').forUpdate();
  await trx('bar').forShare();
});

/**
 * knex is also an event emitter,
 * See : http://knexjs.org/#Interfaces-Events
 */
knex.on('start', () => {});

/* Having tests */
knex('foo').having('count', '>', 100);
knex('foo').havingIn('count', [1, 2, 3]);
// $ExpectError
knex('foo').havingIn('count', 'string');
knex('foo').havingNotIn('count', [1, 2, 3]);
knex('foo').havingNull('count');
// $ExpectError
knex('foo').havingNull(null);
knex('foo').havingExists(function() {
  this.select('*');
});
knex('foo').havingExists(knex.raw('select * from bar'));
knex('foo').havingBetween('count', [1, 5]);
// $ExpectError
knex('foo').havingBetween('count', [1, 2, 3]);
knex('foo').havingRaw('count > 10');
// $ExpectError
knex('foo').havingRaw('count', '>', 100);

/**
 * Bindings with *raw methods
 */

knex.raw('', ['a', 1]);
knex.raw('', { name: 'foo' });
knex('foo').havingRaw('');
knex('foo').havingRaw('', ['a']);
knex('foo').whereRaw('');
knex('foo').whereRaw('', ['a']);
knex('foo').joinRaw('');
knex('foo').joinRaw('', ['a']);

// $ExpectError
knex('foo').raw();
// $ExpectError
knex('foo').raw('', '');
// $ExpectError
knex('foo').havingRaw();
// $ExpectError
knex('foo').whereRaw();
// $ExpectError
knex('foo').joinRaw();

knex.batchInsert('foo', [{ foo: 'bar' }]);
knex.batchInsert('foo', [{ foo: 'bar' }], 50);
knex.transaction(trx => {
  knex.batchInsert('foo', [{ foo: 'bar' }], 50).transacting(trx);
});

knex.migrate
  .latest()
  .then(() => {
    console.log('Migrated to latest');
  })
  .catch(console.error);
knex.migrate
  .latest({
    tableName: 'migration',
    directory: 'migrations/',
    extension: 'js',
    disableTransactions: false,
    loadExtensions: ['.js'],
  })
  .then(() => {
    console.log('Migrated to latest');
  })
  .catch(console.error);

knex.migrate
  .make('my-migration')
  .then(filePath => {
    console.log(`Please write your migration in ${filePath}`);
  })
  .catch(console.error);
knex.migrate
  .make('my-migration', {
    tableName: 'migration',
    directory: 'migrations/',
    extension: 'js',
    disableTransactions: false,
    loadExtensions: ['.js'],
  })
  .then(filePath => {
    console.log(`Please write your migration in ${filePath}`);
  })
  .catch(console.error);
// $ExpectError
knex.migrate.make();

knex.migrate
  .rollback()
  .then(() => {
    console.log('Successful rollback');
  })
  .catch(console.error);
knex.migrate
  .rollback({
    tableName: 'migration',
    directory: 'migrations/',
    extension: 'js',
    disableTransactions: false,
    loadExtensions: ['.js'],
  })
  .then(() => {
    console.log('Successful rollback');
  })
  .catch(console.error);

knex.migrate
  .currentVersion()
  .then(version => {
    console.log(`Current version of the data: ${version}`);
  })
  .catch(console.error);
knex.migrate
  .currentVersion({
    tableName: 'migration',
    directory: 'migrations/',
    extension: 'js',
    disableTransactions: false,
    loadExtensions: ['.js'],
  })
  .then(version => {
    console.log(`Current version of the data: ${version}`);
  })
  .catch(console.error);
