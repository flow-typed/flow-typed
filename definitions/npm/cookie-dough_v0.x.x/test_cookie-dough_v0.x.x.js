// @flow
import cookie from "cookie-dough";

cookie();
cookie().set("foo", '{ "foo": "bar" }');
cookie().set("foo", '{ "foo": "bar" }', { expires: new Date() });

cookie().get("foo");

cookie().remove("foo");
cookie().remove("foo", { expires: new Date() });

cookie().all();

// $FlowExpectedError
cookie(1);

// $FlowExpectedError
cookie().set("foo", { foo: "bar" });

// $FlowExpectedError
cookie().get(1);

// $FlowExpectedError
cookie().remove(1);
