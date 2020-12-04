// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";

import { AppContainer, hot, setConfig } from "react-hot-loader";

describe("react-hot-loader", () => {
  describe("hot", () => {
    it("accepts some module", () => {
      hot(module);

      // $FlowExpectedError
      hot();

      // $FlowExpectedError
      hot({});
    });

    it("returns a helper for wrapping a component in AppContainer", () => {
      const Wrapped = () => <div />;

      hot(module)(Wrapped);
      hot(module)(Wrapped, {});
      hot(module)(Wrapped, { errorBoundary: true });

      // $FlowExpectedError
      hot(module)();

      // $FlowExpectedError
      hot(module)(Wrapped, { errorBoundary: 1 });
    });

    it("returned component accepts same props as the wrapped component", () => {
      const Wrapped = ({ someProp }: {| someProp: string |}) => <div />;

      const Component = hot(module)(Wrapped);
      <Component someProp={"some"} />;

      // $FlowExpectedError
      <Component />;
      // $FlowExpectedError
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

      // $FlowExpectedError
      <AppContainer />;

      // $FlowExpectedError
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

      // $FlowExpectedError
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

      // $FlowExpectedError
      <AppContainer errorReporter={null}>
        <div />
      </AppContainer>;

      // $FlowExpectedError
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
