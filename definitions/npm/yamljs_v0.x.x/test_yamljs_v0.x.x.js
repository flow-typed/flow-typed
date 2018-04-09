import yamljs from "yamljs";

const yaml = `
---
receipt:     Oz-Ware Purchase Invoice
date:        2012-08-06
customer:
    first_name:   Dorothy
    family_name:  Gale

items:
    - part_no:   A4786
      descrip:   Water Bucket (Filled)
      price:     1.47
      quantity:  4

    - part_no:   E1628
      descrip:   High Heeled "Ruby" Slippers
      size:      8
      price:     133.7
      quantity:  1
`;

const parsed = yamljs.parse(yaml);
const generatedString = yamljs.stringify(parsed, 4, 4);

// $ExpectError
yamljs.stringify(parsed, "");
