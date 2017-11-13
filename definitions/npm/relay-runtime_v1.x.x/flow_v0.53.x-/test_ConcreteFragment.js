/* @flow */
/*::
import type {ConcreteFragment} from 'relay-runtime';
*/

const fragment /*: ConcreteFragment*/ = {
  argumentDefinitions: [
    {
      kind: "LocalArgument",
      name: "count",
      type: "Int",
      defaultValue: 10
    },
    {
      kind: "LocalArgument",
      name: "cursor",
      type: "String",
      defaultValue: null
    },
    {
      kind: "RootArgument",
      name: "id",
      type: "ID!"
    }
  ]
};
