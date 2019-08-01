// @flow
import { Schema, Node } from "prosemirror-model";
import type { NodeSpec, MarkSpec } from "prosemirror-model";

const pNode: NodeSpec = {
  group: "block",
  content: "inline*",
  marks: "_",
  toDOM() {
    return ["p", 0];
  },
  parseDOM: [{ tag: "p" }]
};

// $ExpectError toDOM should return something resembling an output spec
const nodeSpec: NodeSpec = {
  toDOM() {
    return { foo: "p", bar: 0 };
  }
};

const schema: Schema = new Schema({ nodes: { p: pNode } });

const node: Node = schema.node("p", null, schema.text("Hello, world!"));
const nodeJSON = node.toJSON();
const parsedNode: Node = Node.fromJSON(schema, nodeJSON);
node.eq(parsedNode);
