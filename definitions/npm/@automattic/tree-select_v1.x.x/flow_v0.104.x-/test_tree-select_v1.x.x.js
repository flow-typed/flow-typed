// @flow
import treeSelect from '@automattic/tree-select';
import { describe, it } from 'flow-typed-test';
type Universe =
  | 'Alien'
  | 'Battlestar Galactica'
  | 'Firefly'
  | 'Star Wars'
  | 'Star Trek'

type Ship = {|
  name: string,
  universe: Universe,
|}

type State = {|
  ships: Ship[],
  selectedUniverses: Universe[],
|}

type Sorting<T> = (T, T) => -1 | 0 | 1;

describe('#treeSelect', () => {
  const shipsInUniverses = treeSelect(
    (state: State) => [state.ships, state.selectedUniverses],
    ([ships, universes], sortBy?: Sorting<Ship>) =>
      ships
        .filter(ship => universes.indexOf(ship.name) > -1)
        .sort(sortBy)
  );

  it('infers correct arugment type', () => {
    // $FlowExpectedError requires State as parameter
    shipsInUniverses('hi');
  });

  it('infers correct return type', () => {
    const state = {
      ships: [],
      selectedUniverses: [],
    };

    // $FlowExpectedError returns Ship[]
    const badResult: String[] = shipsInUniverses(state);
    const result: Ship[] = shipsInUniverses(state);
  })

  it('infers correct additinonal arguments', () => {
    // $FlowExpectedError invalid sorting input types
    shipsInUniverses(state, (a: string, b: string) => -1);

    // $FlowExpectedError invalid return type in second fn argument
    shipsInUniverses(state, (a: Ship, b: Ship) => 'a');

    shipsInUniverses(state, (a, b) => {
      // $FlowExpectedError a is a Ship has no speed prop
      a.speed;
      return 1;
    })
  })

  it('infers correct dependency argument types', () => {
    const findShip: (Ship[], (Ship) => boolean) => ?Ship = (ships, search) => {
      return ships.find(search);
    }
    const selector = treeSelect(
      (state: State) => [ state.ships, 'a', 1, false ],
      ([ships, str, num, bool]) => {
        // $FlowExpectedError ships should be Ship[]
        (ships: boolean);
        // $FlowExpectedError bool is boolean
        (bool: string);
        // $FlowExpectedError str is string
        (str: boolean);
        // $FlowExpectedError num is number
        (num: boolean);
        return ships.find(() => true);
      }
    );
    // $FlowExpectedError should be ?Ship
    const bad: ?string = selector({ships: [], selectedUniverses: []});
    const good: ?Ship = selector({ships: [], selectedUniverses: []});
  })
});


