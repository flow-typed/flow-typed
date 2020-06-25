import Knex from "knex";

const knex = Knex({});
// $FlowExpectedError - invalid Client
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
knex("bar").del();
// $FlowExpectedError
knex.from();

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
      .then(trx.commit)
      .catch(trx.rollback);
  })
  .then(function(result) {})
  .catch(function(err) {});

/**
 * knex is also an event emitter,
 * See : http://knexjs.org/#Interfaces-Events
 */
knex.on("start", () => {});

/* Having tests */
knex("foo").having("count", ">", 100);
knex("foo").havingIn("count", [1, 2, 3]);
// $FlowExpectedError
knex("foo").havingIn("count", "string");
knex("foo").havingNotIn("count", [1, 2, 3]);
knex("foo").havingNull("count");
// $FlowExpectedError
knex("foo").havingNull(null);
knex("foo").havingExists(function() {
  this.select("*");
});
knex("foo").havingExists(knex.raw(""));
knex("foo").havingBetween("count", [1, 5]);
// $FlowExpectedError
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

// $FlowExpectedError
knex("foo").raw();
// $FlowExpectedError
knex("foo").raw("", "");
// $FlowExpectedError
knex("foo").havingRaw();
// $FlowExpectedError
knex("foo").whereRaw();
// $FlowExpectedError
knex("foo").joinRaw();


/**
 * Knex.orWhere()
 */

knex("foo").orWhere((qb) => {
  qb.where("a", "b");
});
knex("foo").orWhere("column", "value");
knex("foo").orWhere("column", "operator", "value");
knex("foo").orWhere({
  col1: "val1",
  col2: "val2"
});

// $FlowExpectedError
knex("foo").orWhere();
// $FlowExpectedError
knex("foo").orWhere(1, 1);
// $FlowExpectedError
knex("foo").orWhere(1, 1, 1);
// $FlowExpectedError
knex("foo").orWhere(true);


/**
 * Knex.where()
 */

knex('foo').where((qb) => {
  qb.where('a', 'b');
});
knex('foo').where('column', 'value');
knex('foo').where('column', 'operator', 'value');
knex('foo').where({
  col1: 'val1',
  col2: 'val2'
});

// $FlowExpectedError
knex('foo').where();
// $FlowExpectedError
knex('foo').where(1, 1);
// $FlowExpectedError
knex('foo').where(1, 1, 1);
// $FlowExpectedError
knex('foo').where(true);


/**
 * Knex.whereNot()
 */

knex("foo").whereNot((qb) => {
  qb.whereNot("a", "b");
});
knex("foo").whereNot("column", "value");
knex("foo").whereNot("column", "operator", "value");
knex("foo").whereNot({
  col1: "val1",
  col2: "val2"
});

// $FlowExpectedError
knex("foo").whereNot();
// $FlowExpectedError
knex("foo").whereNot(1, 1);
// $FlowExpectedError
knex("foo").whereNot(1, 1, 1);
// $FlowExpectedError
knex("foo").whereNot(true);


/**
 * Knex.orWhereNot()
 */

knex("foo").orWhereNot((qb) => {
  qb.where("a", "b");
});
knex("foo").orWhereNot("column", "value");
knex("foo").orWhereNot("column", "operator", "value");
knex("foo").orWhereNot({
  col1: "val1",
  col2: "val2"
});

// $FlowExpectedError
knex("foo").orWhereNot();
// $FlowExpectedError
knex("foo").orWhereNot(1, 1);
// $FlowExpectedError
knex("foo").orWhereNot(1, 1, 1);
// $FlowExpectedError
knex("foo").orWhereNot(true);
