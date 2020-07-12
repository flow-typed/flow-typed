// @flow
import type { SectionReducer, CombinedSectionReducer } from 'combine-section-reducers'
import combineSectionReducers from 'combine-section-reducers'

type Action = { type: 'A' } | { type: 'B' };
type AState = { foo: number };
const initialAState: AState = { foo: 1 }
const reducerA = (state = initialAState, action) => {
  return state
}
type State = {
  a: AState,
  name: string,
  age: number
};

//
// combineReducers API
//

function reducerName(name: string, action: Action, entireState: State): string {
  return name
}

function reducerAge(age: number, action: Action, entireState: State): number {
  return age
}

const reducer0: CombinedSectionReducer<State, Action, State> = combineSectionReducers({
  a: reducerA,
  name: reducerName,
  age: reducerAge
})

const superReducer: SectionReducer<{data: State}, Action, {data: State}> = combineSectionReducers({
  data: reducer0
});

// $FlowExpectedError
combineSectionReducers() // wrong reducers argument
// $FlowExpectedError
combineSectionReducers([]) // wrong reducers argument

// $FlowExpectedError
const reducer1: SectionReducer<State, Action, State> = combineSectionReducers({
  a: reducerA,
  name: reducerName
  // missing age reducer
})
