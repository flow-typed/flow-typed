// @flow
import { describe, it } from 'flow-typed-test';

import { Navigation } from 'react-native-navigation';

describe('Screen API', () => {
  describe('setDefaultOptions', () => {
    it('should return nothing', () => {
      (Navigation.setDefaultOptions({}): void);
    });

    it('raises an error when call without options', () => {
      // $ExpectError - first argument required
      Navigation.setDefaultOptions();
    });
  });

  describe('mergeOptions', () => {
    it('should return nothing', () => {
      (Navigation.mergeOptions('id', {}): void);
    });

    it('raises an error when call without options', () => {
      // $ExpectError - second argument required
      Navigation.mergeOptions('id');
    });
  });
});

describe('Navigation.events', () => {
  const events = Navigation.events();

  describe('.registerAppLaunchedListener', () => {
    it('passes when used properly', () => {
      const unsub = events.registerAppLaunchedListener(() => {});

      unsub.remove();
    });
  });

  describe('.registerComponentDidAppearListener', () => {
    it('passes when used properly', () => {
      const unsub = events.registerComponentDidAppearListener(event => {
        (event.componentId: string);
        (event.componentName: string);
      });

      unsub.remove();
    });

    it('raises an error when try get invalid event prop', () => {
      events.registerComponentDidAppearListener(event => {
        // $ExpectError - property `QWERTYUIOP` is missing in Event
        (event.QWERTYUIOP: string);
      });
    });
  });

  describe('.registerComponentDidDisappearListener', () => {
    it('passes when used properly', () => {
      const unsub = events.registerComponentDidDisappearListener(event => {
        (event.componentId: string);
        (event.componentName: string);
      });

      unsub.remove();
    });

    it('raises an error when try get invalid event prop', () => {
      events.registerComponentDidDisappearListener(event => {
        // $ExpectError - property `QWERTYUIOP` is missing in Event
        (event.QWERTYUIOP: string);
      });
    });
  });

  describe('.bindComponent', () => {
    it('passes when used properly', () => {
      class MyComponent extends React$Component<{}> {
        componentDidMount() {
          Navigation.events().bindComponent(this);
        }

        componentDidAppear() {}
        componentDidDisappear() {}
        searchBarCancelPressed() {}
        navigationButtonPressed({ buttonId }) {}
        searchBarUpdated({ text, isFocused }) {}
        previewCompleted({ previewComponentId }) {}
      }

      new MyComponent({});
    });

    it('raises an error when types of methods wrong', () => {
      class MyComponent1 extends React$Component<{}> {
        componentDidMount() {
          // $ExpectError - `buttonId` must be string
          Navigation.events().bindComponent(this);
        }

        navigationButtonPressed({ buttonId }: { buttonId: boolean }) {}
      }

      class MyComponent2 extends React$Component<{}> {
        componentDidMount() {
          // $ExpectError - `text` must be string, isFocused must be boolean
          Navigation.events().bindComponent(this);
        }

        searchBarUpdated({
          text,
          isFocused,
        }: {
          text: boolean,
          isFocused: string,
        }) {}
      }

      class MyComponent3 extends React$Component<{}> {
        componentDidMount() {
          // $ExpectError - `QWERTYUIO` is missing in event
          Navigation.events().bindComponent(this);
        }

        previewCompleted({
          previewComponentId,
        }: {
          previewComponentId: string,
          QWERTYUIO: number,
        }) {}
      }

      new MyComponent1({});
      new MyComponent2({});
      new MyComponent3({});
    });
  });
});

describe('Navigation.registerComponent', () => {
  class Comp extends React$Component<{}> {}
  class CompWithProps extends React$Component<{ componentId: string }> {}
  class CompWithWrongProps extends React$Component<{ componentId: boolean }> {}

  it('should passed when call with id as string', () => {
    Navigation.registerComponent('home', () => Comp);
  });
  it('should passed when call with id as number', () => {
    Navigation.registerComponent(1, () => Comp);
  });
  it('should passed when prop componentId is string', () => {
    Navigation.registerComponent(1, () => CompWithProps);
  });

  it("should raises an error when prop `componentId` ins't string", () => {
    // $ExpectError - `componentId: boolean` but need `string`
    Navigation.registerComponent('1', () => CompWithWrongProps);
  });
  it('should raises an error when invalid screenID type', () => {
    const screenId = null;
    // $ExpectError - `screenId: void` but need string or number
    Navigation.registerComponent(screenId, () => Comp);
  });
});

describe('Navigation.constants', () => {
  it('should return constants', () => {
    Navigation.constants().then(result => {
      (result.backButtonId: string);
      (result.bottomTabsHeight: number);
      (result.statusBarHeight: number);
      (result.topBarHeight: number);
    });
  });

  it('should raises an error when cast to wrong type', () => {
    Navigation.constants().then(result => {
      // $ExpectError - backButtonId is string
      (result.backButtonId: boolean);
      // $ExpectError - backButtonId is number
      (result.bottomTabsHeight: string);
      // $ExpectError - backButtonId is number
      (result.statusBarHeight: string);
      // $ExpectError - backButtonId is number
      (result.topBarHeight: string);
    });
  });
});
