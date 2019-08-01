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
    // $ExpectError
    const badCard = new vCard("hi");
    const card = new vCard();

    // $ExpectError
    card.set(1, "mark");

    // $ExpectError
    card.set("adr", "menlo park", "oops");

    // $ExpectError
    card.add(1, "menlo park");

    // $ExpectError
    card.add("adr", "menlo park", "ooops");

    // $ExpectError
    card.parse();

    // $ExpectError
    card.toJSON("hi");

    // $ExpectError
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

    // $ExpectError
    const property = new vCard.Property(1, "value");

    // $ExpectError
    const property2 = new vCard.Property("adr", "101 loop", 3);

    // $ExpectError
    const property2 = new vCard.Property("adr", 12);

    const cardProperty = card.get("fn");

    if (!Array.isArray(cardProperty)) {
      // $ExpectError
      cardProperty.is(1);

      // $ExpectError
      cardProperty.isEmpty("hi");

      // $ExpectError
      cardProperty.toString(4);

      // $ExpectError
      cardProperty.valueOf("hi");

      // $ExpectError
      cardProperty.toJSON("hi");
    }
  });
});
