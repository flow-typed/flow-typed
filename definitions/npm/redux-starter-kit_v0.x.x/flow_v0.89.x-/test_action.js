// @flow
import type {PayloadAction} from 'redux-starter-kit'

opaque type Person = {name: string, id: number}

const action1: PayloadAction<number, "increment"> = { type: "increment", payload: 3 };

const action2: PayloadAction<Person> = {
  type: "addPerson", payload: {name: "Omid", id: 1}
};

// $ExpectError
const action3: PayloadAction<number> = { type: "increment", payload: "3" };

// $ExpectError
const action4: PayloadAction<Person> = {
  type: "addPerson", payload: {name: "Omid"}
};
