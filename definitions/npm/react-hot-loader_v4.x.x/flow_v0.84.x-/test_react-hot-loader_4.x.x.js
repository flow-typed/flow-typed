// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";

import { AppContainer, hot, setConfig } from "react-hot-loader";

describe("react-hot-loader", () => {
  describe("hot", () => {
    it("accepts some module", () => {
      hot(module);

      // $ExpectError
      hot();

      // $ExpectError
      hot({});
    });

    it("returns a helper for wrapping a component in AppContainer", () => {
      const Wrapped = () => <div />;

      hot(module)(Wrapped);
      hot(module)(Wrapped, {});
      hot(module)(Wrapped, { errorBoundary: true });

      // $ExpectError
      hot(module)();

      // $ExpectError
      hot(module)(Wrapped, { errorBoundary: 1 });
    });

    it("returned component accepts same props as the wrapped component", () => {
      const Wrapped = ({ someProp }: {| someProp: string |}) => <div />;

      const Component = hot(module)(Wrapped);
      <Component someProp={"some"} />;

      // $ExpectError
      <Component />;
      // $ExpectError
      <Component someProp={1} />;
    });
  });

  describe("AppContainer", () => {
    it("accepts only one child", () => {
      <AppContainer>
        <div />
      </AppContainer>;

      const SomeComponent = () => null;
      <AppContainer>
        <SomeComponent />
      </AppContainer>;

      // $ExpectError
      <AppContainer />;

      // $ExpectError
      <AppContainer>
        /<div />
        <div />
      </AppContainer>;
    });

    it("accepts an optional errorBoundary flag", () => {
      <AppContainer errorBoundary>
        <div />
      </AppContainer>;

      <AppContainer errorBoundary={false}>
        <div />
      </AppContainer>;

      // $ExpectError
      <AppContainer errorBoundary={1}>
        <div />
      </AppContainer>;
    });

    it("accepts an optional error reporting component that optionally accepts error and errorInfo", () => {
      let ErrorReporter;

      ErrorReporter = () => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;

      ErrorReporter = ({ error }: { error: Error, ... }) => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;

      ErrorReporter = ({
        errorInfo
      }: { errorInfo: { componentStack: string, ... }, ... }) => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;

      // $ExpectError
      <AppContainer errorReporter={null}>
        <div />
      </AppContainer>;

      // $ExpectError
      ErrorReporter = ({ error }: { error: number, ... }) => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;
    });

    it('can use setConfig', () => {
      setConfig({
        logLevel: 'error',
        errorReporter: ({ error }: { error: Error, ... }) => <div />,
        ErrorOverlay: () => null,
      });
    });
  });
});
