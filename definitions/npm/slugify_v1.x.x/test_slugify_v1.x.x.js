/* @flow */
import slugify from "slugify";

const slugifiedText: string = slugify("Hello world");
slugify("Hello world", "-");

// $ExpectError
slugify(0);

slugify("Hello world", {});
slugify("Hello world", { replacement: "-" });
slugify("Hello world", { remove: null });
slugify("Hello world", { lower: true });

// $ExpectError
slugify("Hello world", { replacement: 0 });
// $ExpectError
slugify("Hello world", { remove: "hello" });
// $ExpectError
slugify("Hello world", { lower: "hello" });
// $ExpectError
slugify("Hello world", 0);

slugify.extend({ key: "value" });
// $ExpectError
slugify.extend({ key: 0 });
