// @flow
import React from "react";
import useReactRouter from "use-react-router";
import { it, describe } from "flow-typed-test";

describe("react-router-dom", () => {
  it('useReactRouter should not accept parameters', () => {
    useReactRouter();
    // $ExpectError
    useReactRouter(null);
  });

  it('useReactRouter should validate on default usage', () => {
    function Test() {
      const {history, match, location} = useReactRouter();

      return (
        <div>
          Current search: {location.search}
          Current path {match.path}
          <button onClick={() => history.goBack()}>Go back</button>
        </div>
      );
    }
  });

  it('useReactRouter should return typed destructured vars for history', () => {
    const {
      history: {
        length,
        location,
        action,
        listen,
        push,
        replace,
        go,
        goBack,
        goForward,
        canGo,
        block,
        index,
        entries
      }
    } = useReactRouter();

    (length: number);
    (location.pathname: string);
    (location.search: string);
    (location.hash: string);
    (location.state: ?any);
    (location.key: ?string);
    (action: string);
    (listen: ((any, any) => void) => () => void);
    (push: (string) => void);
    (replace: (string) => void);
    (go: (number) => void);
    (goBack: () => void);
    (goForward: () => void);
    (canGo: ?(number) => boolean);
    (block: ((any, any) => boolean) => void);
    (index: ?number);
    (entries: ?Array<{
      pathname: string,
      search: string,
      hash: string,
      state?: any,
      key?: string,
      ...
    }>);
  });

  it('useReactRouter should return typed destructured vars for match', () => {
    const {match: {params, isExact, path, url}} = useReactRouter();

    (params: {...});
    (isExact: boolean);
    (path: string);
    (url: string);
  });

  it('useReactRouter should return typed destructured vars for location', () => {
    const {location: {pathname, search, hash, state, key}} = useReactRouter();

    (pathname: string);
    (search: string);
    (hash: string);
    (state: any);
    (key: ?string);
  });

  it("can't pass wrong action to history.listen", () => {
    const {history: {listen}} = useReactRouter();

    const callback = (location, action: "WRONG-ACTION") => {};

    // $ExpectError
    listen(callback)
  });

  it("can't pass wrong location to history.listen", () => {
    const {history: {listen}} = useReactRouter();

    const callback = (location: string, action) => {};

    // $ExpectError
    listen(callback)
  });

  it("can't pass wrong action to history.block", () => {
    const {history: {block}} = useReactRouter();

    const callback = (location, action: "WRONG-ACTION"):boolean => {
      return true;
    };

    // $ExpectError
    block(callback)
  });

  it("can't pass wrong location to history.block", () => {
    const {history: {block}} = useReactRouter();

    const callback = (location: string, action):boolean => {
      return true;
    };

    // $ExpectError
    block(callback)
  });
});
