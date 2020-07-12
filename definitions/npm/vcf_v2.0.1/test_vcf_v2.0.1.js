import { describe, it } from "flow-typed-test";
import vCard from "vcf";

describe("vcf", () => {
  it("vcard constructor and functions should work", () => {
    const card = new vCard();
    card.set("fn", "mark");
    card.set("adr", "menlo park", { category: "work" });
    card.add("adr", "menlo park", { category: "home" });
    card.parse(card.toString());
    card.toJSON();
    card.toJCard("v4");
  });

  it("vcard constructor and functions should fail on bad types", () => {
    // $FlowExpectedError
    const badCard = new vCard("hi");
    const card = new vCard();

    // $FlowExpectedError
    card.set(1, "mark");

    // $FlowExpectedError
    card.set("adr", "menlo park", "oops");

    // $FlowExpectedError
    card.add(1, "menlo park");

    // $FlowExpectedError
    card.add("adr", "menlo park", "ooops");

    // $FlowExpectedError
    card.parse();

    // $FlowExpectedError
    card.toJSON("hi");

    // $FlowExpectedError
    card.toJCard(1);
  });

  it("vcardproperty constructor and functions should work", () => {
    const card = new vCard();
    const property = new vCard.Property("fn", "value");
    const property2 = new vCard.Property("adr", "101 loop", { type: "work" });
    card.set("fn", "mark");

    const cardProperty = card.get("fn");
    if (!Array.isArray(cardProperty)) {
      cardProperty.is("fn");
      cardProperty.isEmpty();
      cardProperty.toString("v4");
      cardProperty.valueOf();
      cardProperty.toJSON();
      property.is("fn");
      property2.is("adr");
    }
  });

  it("vcardproperty constructor and functions should fail on bad types", () => {
    const card = new vCard();
    card.set("fn", "mark");

    // $FlowExpectedError
    const property = new vCard.Property(1, "value");

    // $FlowExpectedError
    const property2 = new vCard.Property("adr", "101 loop", 3);

    // $FlowExpectedError
    const property3 = new vCard.Property("adr", 12);

    const cardProperty = card.get("fn");

    if (!Array.isArray(cardProperty)) {
      // $FlowExpectedError
      cardProperty.is(1);

      // $FlowExpectedError
      cardProperty.isEmpty("hi");

      // $FlowExpectedError
      cardProperty.toString(4);

      // $FlowExpectedError
      cardProperty.valueOf("hi");

      // $FlowExpectedError
      cardProperty.toJSON("hi");
    }
  });
});
