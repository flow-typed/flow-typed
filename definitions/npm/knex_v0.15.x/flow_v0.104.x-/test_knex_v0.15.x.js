import Knex, { type Transaction } from "knex";

const knex = Knex({});
// $FlowExpectedError[incompatible-call] - invalid Client
Knex({
  client: "foo"
});

knex
  .clearSelect()
  .clearWhere()
  .select("foo")
  .withSchema("a")
  .from("bar")
  .where("foo", 2)
  .where({ mixed: "hi" })
  .orWhere("bar", "foo")
  .whereNot("asd", 1)
  .whereIn("batz", [1, 2]);
knex.select(knex.raw(""));

knex.innerJoin("bar", function() {
  return this;
});
knex.leftJoin("bar", function() {
  return this;
});
knex.rightJoin("bar", function() {
  return this;
});
knex.rightOuterJoin("bar", function() {
  return this;
});
knex.fullOuterJoin("bar", function() {
  return this;
});
knex.crossJoin("bar", function() {
  return this;
});

knex("foo").insert({
  a: 1
});
knex('foo').truncate();
knex("bar").del();
// $FlowExpectedError[incompatible-call]
knex.from();

knex.table('foo');

knex.destroy();

/**
 * Promise interface
 */
knex
  .select("foo")
  .from("bar")
  .then(function(result) {})
  .then(function(result) {}, function(err) {})
  .catch(function(err) {});

knex
  .transaction(function(trx) {
    trx
      .insert({ a: 1 })
      .into("foo")
      .transacting(trx)
      // $FlowExpectedError[method-unbinding]
      .then(trx.commit)
      // $FlowExpectedError[method-unbinding]
      .catch(trx.rollback);
  })
  .then(function(result) {})
  .catch(function(err) {});

knex
  .transaction(function(trx) {
    trx.rollback();
  });

knex
  .transaction(async (trx) => {
    await trx('foo').forUpdate();
    await trx('bar').forShare();
  });

/**
 * knex is also an event emitter,
 * See : http://knexjs.org/#Interfaces-Events
 */
knex.on("start", () => {});

/* Having tests */
knex("foo").having("count", ">", 100);
knex("foo").havingIn("count", [1, 2, 3]);
// $FlowExpectedError[incompatible-call]
knex("foo").havingIn("count", "string");
knex("foo").havingNotIn("count", [1, 2, 3]);
knex("foo").havingNull("count");
// $FlowExpectedError[incompatible-call]
knex("foo").havingNull(null);
knex("foo").havingExists(function() {
  this.select("*");
});
knex("foo").havingExists(knex.raw(""));
knex("foo").havingBetween("count", [1, 5]);
// $FlowExpectedError[invalid-tuple-arity]
knex("foo").havingBetween("count", [1, 2, 3]);
knex("foo").havingRaw("count > 10");

/**
 * Bindings with *raw methods
 */

knex.raw("", ["a", 1]);
knex.raw("", { name: "foo" });
knex("foo").havingRaw("");
knex("foo").havingRaw("", ["a"]);
knex("foo").whereRaw("");
knex("foo").whereRaw("", ["a"]);
knex("foo").joinRaw("");
knex("foo").joinRaw("", ["a"]);

// $FlowExpectedError[prop-missing]
knex("foo").raw();
// $FlowExpectedError[prop-missing]
knex("foo").raw("", "");
// $FlowExpectedError[incompatible-call]
knex("foo").havingRaw();
// $FlowExpectedError[incompatible-call]
knex("foo").whereRaw();
// $FlowExpectedError[incompatible-call]
knex("foo").joinRaw();

knex.batchInsert('foo', [{ foo: 'bar' }]);
knex.batchInsert('foo', [{ foo: 'bar' }], 50);
knex.transaction((trx) => {
  knex.batchInsert('foo', [{ foo: 'bar' }], 50).transacting(trx);
});


knex.migrate.latest()
  .then(() => {
    console.log('Migrated to latest');
  })
  .catch(console.error);
knex.migrate.latest({
  tableName: 'migration',
  directory: 'migrations/',
  extension: 'js',
  disableTransactions: false,
  loadExtensions: ['.js']
})
  .then(() => {
    console.log('Migrated to latest');
  })
  .catch(console.error);

knex.migrate.make('my-migration')
  .then((filePath) => {
    console.log(`Please write your migration in ${filePath}`);
  })
  .catch(console.error);
knex.migrate.make('my-migration', {
  tableName: 'migration',
  directory: 'migrations/',
  extension: 'js',
  disableTransactions: false,
  loadExtensions: ['.js']
})
  .then((filePath) => {
    console.log(`Please write your migration in ${filePath}`);
  })
  .catch(console.error);
// $FlowExpectedError[incompatible-call]
knex.migrate.make();

knex.migrate.rollback()
  .then(() => {
    console.log('Successful rollback');
  })
  .catch(console.error);
knex.migrate.rollback({
  tableName: 'migration',
  directory: 'migrations/',
  extension: 'js',
  disableTransactions: false,
  loadExtensions: ['.js']
})
  .then(() => {
    console.log('Successful rollback');
  })
  .catch(console.error);

knex.migrate.currentVersion()
  .then((version) => {
    console.log(`Current version of the data: ${version}`);
  })
  .catch(console.error);
knex.migrate.currentVersion({
  tableName: 'migration',
  directory: 'migrations/',
  extension: 'js',
  disableTransactions: false,
  loadExtensions: ['.js']
})
  .then((version) => {
    console.log(`Current version of the data: ${version}`);
  })
  .catch(console.error);

function doSomeStuffInTransaction(trx: Transaction<string>) {
  // $FlowExpectedError[prop-missing] Can use `Transaction` type
  trx.func();
  (trx.savepoint(): Promise<string>);
  // $FlowExpectedError[incompatible-cast]
  (trx.savepoint(): Promise<number>);
}
