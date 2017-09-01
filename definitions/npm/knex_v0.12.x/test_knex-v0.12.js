import Knex from "knex";

const knex = Knex({});
// $ExpectError - invalid Client
Knex({
  client: "foo"
});

knex
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
// $ExpectError
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
// $ExpectError
knex("foo").havingIn("count", "string");
knex("foo").havingNotIn("count", [1, 2, 3]);
knex("foo").havingNull("count");
// $ExpectError
knex("foo").havingNull(null);
knex("foo").havingExists(function() {
  this.select("*");
});
knex("foo").havingExists(knex.raw(""));
knex("foo").havingBetween("count", [1, 5]);
// $ExpectError
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

// $ExpectError
knex("foo").raw();
// $ExpectError
knex("foo").raw("", "");
// $ExpectError
knex("foo").havingRaw();
// $ExpectError
knex("foo").whereRaw();
// $ExpectError
knex("foo").joinRaw();
