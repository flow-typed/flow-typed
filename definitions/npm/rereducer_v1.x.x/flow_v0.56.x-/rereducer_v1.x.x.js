declare module "rereducer" {
  declare type Matcher<State> = (
    action: { type: string },
    state: State
  ) => boolean;

  declare type Pattern<State> = string | Matcher<State> | Array<Pattern<State>>;

  declare export type Reducer<State> = (
    state: ?State,
    action: { type: string }
  ) => State;

  declare type InnerReducer<State, Action> = (
    state: State,
    action: Action
  ) => State;

  declare export type Case<State, Action> = [
    Pattern<State>,
    InnerReducer<State, Action>
  ];

  declare export function getPayload<Payload>(
    state: any,
    action: { payload: Payload }
  ): Payload;

  declare export default function rereducer<State>(
    init: State,
    ...args: Array<Case<State, any>>
  ): Reducer<State>;

  declare export default function rereducer<State>(
    ...args: Array<Case<State, any>>
  ): (state: State) => Reducer<State>;
}
