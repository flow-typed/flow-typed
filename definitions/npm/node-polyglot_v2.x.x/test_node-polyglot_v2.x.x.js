import Polyglot from "node-polyglot";

const instance = new Polyglot({
  phrases: {},
  locale: "foo",
  allowMissing: true,
  onMissingKey: (key, opts, locale) => {
    console.log(key.length, Object.keys(opts), locale.length);

    return "foo";
  }
});
new Polyglot();

// $ExpectError
new Polyglot("foo");

Polyglot.transformPhrase("foo").length;
Polyglot.transformPhrase("foo", {}).length;
Polyglot.transformPhrase("foo", {}, "en-US").length;

instance.extend({ foo: "bar" });

// $ExpectError
instance.extend("foo");

instance.t("foo").length;
instance.t("foo", {}).length;

// $ExpectError
instance.t(2);

instance.locale("foo").length;
instance.locale().length;

// $ExpectError
instance.locale(2);

instance.unset("foo");
instance.unset({});

// $ExpectError
instance.unset(2);

instance.clear();

instance.replace({});

// $ExpectError
instance.replace("foo");
