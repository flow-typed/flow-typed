// @flow
import { Schema } from "prosemirror-model";
import type { NodeSpec, MarkSpec } from "prosemirror-model";

const node: NodeSpec = {
  group: "block",
  content: "inline*",
  marks: "_",
  toDOM() {
    return ["p", 0];
  },
  parseDOM: [{ tag: "p" }]
};

// $ExpectError toDOM should return something resembling an output spec
const node: NodeSpec = {
  toDOM() {
    return { foO: "p", bar: 0 };
  }
};
