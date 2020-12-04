// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";

import { AppContainer, hot, setConfig, areComponentsEqual, cold } from "react-hot-loader";
import { hot as rootHot } from "react-hot-loader/root";

describe("react-hot-loader", () => {
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
        <div />
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

      ErrorReporter = ({ error }: { error: Error }) => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;

      ErrorReporter = ({
        errorInfo
      }: {
        errorInfo: { componentStack: string }
      }) => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;

      // $FlowExpectedError
      <AppContainer errorReporter={null}>
        <div />
      </AppContainer>;

      // $FlowExpectedError
      ErrorReporter = ({ error }: { error: number }) => <div />;
      <AppContainer errorReporter={ErrorReporter}>
        <div />
      </AppContainer>;
    });
  });

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
      const Wrapped = ({ someProp }: $Exact<{ someProp: string }>) => <div />;

      const Component = hot(module)(Wrapped);

      <Component someProp={"some"} />;

      // $FlowExpectedError
      <Component />;

      // $FlowExpectedError
      <Component someProp={1} />;
    });
  });

  describe("cold", () => {
    it('pass wrong parameters', () => {
      const Component1 = () => <div />;

      cold(Component1);

      // $FlowExpectedError
      cold({});

      // $FlowExpectedError
      cold(1);

      // $FlowExpectedError
      cold(true);

      // $FlowExpectedError
      cold(<div />);
    });
  });

  describe("areComponentsEqual", () => {
    it('pass wrong parameters', () => {
      const Component1 = () => <div />;
      const Component2 = () => <div />;
      const Component3 = () => <div />;

      areComponentsEqual(Component1, Component2);

      // $FlowExpectedError
      areComponentsEqual(Component1, {});

      // $FlowExpectedError
      areComponentsEqual(1, Component2);

      // $FlowExpectedError
      areComponentsEqual(Component1, true);

      // $FlowExpectedError
      areComponentsEqual(Component1, Component2, Component3);
    });
  });

  describe("setConfig", () => {
    it('can use', () => {
      setConfig({
        logLevel: 'error',
        errorReporter: ({ error }: { error: Error }) => <div />,
        ErrorOverlay: () => null,
      });
    });

    it('can pass partial config', () => {
      setConfig({
        pureSFC: false,
        allowSFC: true,
        ignoreSFC: false,
      });
    });

    it('error when type not match', () => {
      // $FlowExpectedError
      setConfig({
        logLevel: 'my value',
        pureSFC: 1,
        ignoreSFC: 0,
      });
    });
  });
});

describe("react-hot-loader/root", () => {
  describe("hot", () => {
    it("returns a helper for wrapping a component in AppContainer", () => {
      const Wrapped = () => <div />;

      rootHot(Wrapped);
      rootHot(Wrapped, {});
      rootHot(Wrapped, { errorBoundary: true });

      // $FlowExpectedError
      rootHot();

      // $FlowExpectedError
      rootHot(Wrapped, { errorBoundary: 1 });
    });

    it("returned component accepts same props as the wrapped component", () => {
      const Wrapped = ({ someProp }: $Exact<{ someProp: string }>) => <div />;

      const Component = rootHot(Wrapped);

      <Component someProp={"some"} />;

      // $FlowExpectedError
      <Component />;

      // $FlowExpectedError
      <Component someProp={1} />;
    });
  });
});
