// @flow
import cookie from "cookie-dough";

cookie();
cookie().set("foo", '{ "foo": "bar" }');
cookie().set("foo", '{ "foo": "bar" }', { expires: new Date() });

cookie().get("foo");

cookie().remove("foo");
cookie().remove("foo", { expires: new Date() });

cookie().all();

// $ExpectError
cookie(1);

// $ExpectError
cookie().set("foo", { foo: "bar" });

// $ExpectError
cookie().get(1);

// $ExpectError
cookie().remove(1);
