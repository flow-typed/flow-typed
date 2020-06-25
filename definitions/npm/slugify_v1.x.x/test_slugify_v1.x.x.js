/* @flow */
import slugify from "slugify";

const slugifiedText: string = slugify("Hello world");
slugify("Hello world", "-");

// $FlowExpectedError
slugify(0);

slugify("Hello world", {});
slugify("Hello world", { replacement: "-" });
slugify("Hello world", { remove: null });
slugify("Hello world", { lower: true });

// $FlowExpectedError
slugify("Hello world", { replacement: 0 });
// $FlowExpectedError
slugify("Hello world", { remove: "hello" });
// $FlowExpectedError
slugify("Hello world", { lower: "hello" });
// $FlowExpectedError
slugify("Hello world", 0);

slugify.extend({ key: "value" });
// $FlowExpectedError
slugify.extend({ key: 0 });
