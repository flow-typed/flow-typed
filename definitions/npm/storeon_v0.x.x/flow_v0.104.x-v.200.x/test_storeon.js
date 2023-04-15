// @flow
import React from "react";
import createStore, { type Module, type Store} from "storeon";
import devtools from "storeon/devtools";
import logger from "storeon/devtools/logger";
import loggerBrowser from "storeon/devtools/logger.browser";
import useStoreon from "storeon/react";
import StoreContext from "storeon/react/context";
import connect from "storeon/react/connect";
import { it, describe } from "flow-typed-test";
import * as ReactDOM from "react-dom";

describe("storeon", () => {
  it('storeon', () => {
      type State = {
          a: number,
          b: string,
          ...
      }

      // Reducer typed as a Module
      const init: Module<State> = (store) => {
          store.on('@init', () => {
              return { a: 0, b: '' }
          })
      }

      // Duck-typed reducer
      function setUp(store: Store<State>): void {
          store.on('inc', (state) => ({ a: state.a + 1 }))
      }

      // Store
      const store = createStore<State>([
          init,
          setUp,
          logger,
          loggerBrowser,
          devtools,
          devtools(),
      ])

      // String event dispatch
      store.dispatch('inc')

      // Symbolic event
      const sym = Symbol('sym')
      store.on(sym, (state, data: number) => ({ a: state.a + data }))
      store.dispatch(sym, 2)

      // Async reducer
      store.on('comment:post', async (_, data: string) => {
          store.dispatch('comment:posting')

          try {
              const response = await fetch('https://github.com', {
                  body: data
              })

              const result = await response.json()
              store.dispatch('comment:posted', result)
          } catch (e) {
              store.dispatch('comment:error', e)
          }
      })

      const state = store.get()
      state.a
  });

  it("storeon/react", () => {
      type State = { a: number, ... }

      function init(store: Store<State>) {
          store.on('@init', () => ({ a: 0 }))
          store.on('inc', (state, data: number) => ({a: state.a + data}))
      }

      const store = createStore([init])

      function Button() {
          const {dispatch, a} = useStoreon<State>('a')

          const onClick = React.useCallback(() => dispatch('inc'), [])

          return (
              <button onClick={onClick}>Count: {a}</button>
          )
      }

      const App = connect<State>('a', ({a}) => {
          return (
              <>
                  <div>Count: {a}</div>
                  <Button/>
              </>
          )
      });

      const el = document.getElementById("root");

      if (el) {
          ReactDOM.render(
              <StoreContext.Provider value={store}>
                  <App/>
              </StoreContext.Provider>,
              el
          )
      }

  })
});
