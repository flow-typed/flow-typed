// @flow
import { describe, it } from 'flow-typed-test';
import type { CreateReduxState } from 'zustand/middleware';
import type { CreateState } from 'zustand';
import { create } from 'zustand/react';
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  redux,
} from 'zustand/middleware';

type PositionState = {| position: string |};
type PositionAction = {| type: 'SET_POSITION', value: string |};

function positionReducer(
  state: PositionState,
  action: PositionAction,
): PositionState {
  if (action.type === 'SET_POSITION') {
    return { ...state, position: action.value };
  }

  return state;
}

describe('zustand/middleware', () => {
  it('redux + devtools', () => {
    const createPositionReduxState: CreateReduxState<
      PositionState,
      PositionAction,
    > = redux(positionReducer, { position: 'aa' });

    const useStore = create(devtools(createPositionReduxState));
    useStore().position as string;
    useStore().dispatch as PositionAction => PositionAction;
    useStore().dispatch({ type: 'SET_POSITION', value: 'bb' });

    // $FlowExpectedError[incompatible-type]
    useStore().dispatch({ type: 'UNKNOWN', value: 'bb' });
    // $FlowExpectedError[incompatible-type]
    redux(positionReducer, { position: 1 });
    // $FlowExpectedError[incompatible-type]
    devtools(createPositionReduxState, { unknownOption: true });
  });

  type PositionMethods = {|
    setPosition: string => void,
  |};

  it('combine', () => {
    const createPositionState: CreateState<{|
      ...PositionState,
      ...PositionMethods,
    |}> = combine({ position: 'bb' }, set => ({
      setPosition: (value: string) => set({ position: value }),
    }));

    create(createPositionState)().setPosition('cc');

    // $FlowExpectedError[incompatible-type]
    create(createPositionState)().setPosition(1);
  });

  it('persist', () => {
    const createPositionState: CreateState<PositionState> = () => ({
      position: 'cc',
    });
    const items: Map<string, string> = new Map();
    const memoryStorage = {
      getItem: (key: string) => items.get(key) ?? null,
      setItem: (key: string, value: string) => {
        items.set(key, value);
      },
      removeItem: (key: string) => {
        items.delete(key);
      },
    };

    create(
      persist(createPositionState, {
        name: 'position',
        storage: createJSONStorage(() => memoryStorage),
        version: 1,
      }),
    );

    // $FlowExpectedError[incompatible-type]
    persist(createPositionState, { name: 1 });
  });
});
