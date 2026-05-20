// @flow

import { describe, it } from 'flow-typed-test';
import { parse, visit, type DocumentNode } from "graphql";

describe("graphql", () => {
  const validDocument = "query { id }";
  let documentNode: DocumentNode;

  describe("parse", () => {
    it("accepts a valid document argument and returns a DocumentNode", () => {
      documentNode = parse(validDocument);
    });

    it("rejects an invalid document argument", () => {
      const invalidDocument = { wrong: "type" };
      // $FlowExpectedError[incompatible-call]
      parse(invalidDocument);
    });
  });

  describe("visit a DocumentNode", () => {
    it("accepts valid visitor", () => {
      const validVisitor = {
        ObjectTypeDefinition: {
          enter(node: DocumentNode) {},
          leave() {}
        },
        FieldDefinition: {
          enter(node: DocumentNode) {},
          leave() {}
        },
        Directive: {
          enter(node: DocumentNode) {}
        }
      };
      visit(documentNode, validVisitor);
    });

    it("rejects invalid visitor", () => {
      const invalidVisitor = "not a visitor";
      // $FlowExpectedError[incompatible-call]
      visit(documentNode, invalidVisitor);
    })
  });
});
