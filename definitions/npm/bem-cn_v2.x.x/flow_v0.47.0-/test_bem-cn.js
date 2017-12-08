import createBlock, { setup, reset } from "bem-cn";

var block = createBlock("block");
// $ExpectError
createBlock();
// $ExpectError
createBlock(1);
// $ExpectError
createBlock({ modifier: "test" });

var element = block("element");
block();
block({ modifier: "test", test: true });
// $ExpectError
block({ modifier: 1 });
// $ExpectError
block(1);

element();
var modifier = element({ modifier: "test", test: true });
// $ExpectError
element({ modifier: 1 });
// $ExpectError
element(1);

modifier();

block.toString();
element.toString();
modifier.toString();

block.state({ modifier: true });
// $ExpectError
block.state({ modifier: "test" });
// $ExpectError
block.state("test");
// $ExpectError
block.state(1);

block.is({ modifier: true });
// $ExpectError
block.is({ modifier: "test" });
// $ExpectError
block.is("test");

block.mix("test");
block.mix(["test"]);
// $ExpectError
block.mix({ modifier: "test" });

block.split(",");
block.split(",", 1);
// $ExpectError
block.split(",", "a");
// $ExpectError
block.split(1, "a");

reset();
// $ExpectError
reset("anything");

setup({ el: "-" });
// $ExpectError
setup();
// $ExpectError
setup("test");
