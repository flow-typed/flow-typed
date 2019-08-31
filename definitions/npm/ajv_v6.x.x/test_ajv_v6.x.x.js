// @flow
import { describe, it } from "flow-typed-test";
import Ajv from "ajv";

const schema = {
    "properties": {
        "smaller": {
            "type": "number",
            "maximum": { "$data": "1/larger" }
        },
        "larger": { "type": "number" }
    }
};

describe("ajv", () => {
    it("accepts valid schemas and data", () => {
        const data = {
            smaller: 5,
            larger: 7
        };

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(data);

        ajv.validate(schema, data);
        ajv.addSchema(schema, 'properties').validate('properties', data);

        ajv.addMetaSchema({});
    })

    it("allows defining custom keywords", () => {
        const ajv = new Ajv();
        ajv.addSchema(schema, 'properties')
        ajv.addKeyword('range', { type: ['number'] });
    })
})
