/* @flow */
import * as React from "react";
import {
  intlShape,
  addLocaleData,
  defineMessages,
  injectIntl,
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
  IntlProvider
} from "react-intl";
import type { IntlShape, MessageDescriptor } from "react-intl";
import { it, describe } from "flow-typed-test";

intlShape({ foo: "bar" }, "propName", "TestComponentName");
// $ExpectError number. This type is incompatible with void
const result1: number = intlShape(
  { foo: "bar" },
  "propName",
  "TestComponentName"
);

const localeData = {
  locale: "fi",
  testKey: { foo: "bar" },
  testKey2: { baz: "buu" }
};
addLocaleData(localeData);
// $ExpectError number. This type is incompatible with void
const resultLocaleData: number = addLocaleData(localeData);

const messages = {
  messagekey1: {
    id: "messageid1",
    defaultMessage: "Nice default message",
    description: "description field yeah"
  },
  messagekey2_foo: {
    id: "messageid2_foo",
    defaultMessage: "Nice default message for second translation id",
    description: "description field yeah for second field"
  },
  messagekey3: {
    id: "messageid3"
  }
};
const messageDescriptorMap = defineMessages(messages);
// $ExpectError foo is undefined
const messageDescriptorMap1 = defineMessages(messages).foo;
// $ExpectError id and defaultMessage are required
const messageDescriptorMap2 = defineMessages({ message: {} });
// $ExpectError array. This type is incompatible with MessageDescriptorMap
const messageDescriptorMap3: Array<string> = defineMessages(messages);
// $ExpectError string. This type is incompatible with MessageDescriptorMap
const messageDescriptorMap4: string = defineMessages(messages);
const msg1:MessageDescriptor = messageDescriptorMap.messagekey1;
const msg2:MessageDescriptor = messageDescriptorMap.messagekey2_foo;
const msg3:MessageDescriptor = messageDescriptorMap.messagekey3;


// Components
<FormattedMessage
  id="test"
  defaultMessage="test message"
  description="this is description"
/>;
<FormattedMessage
  id="test_plural"
  defaultMessage={`Hello {name}, you have {numMessages, number} {numMessages, plural,
    one {message}
    other {messages}
  }`}
  description="Plural example"
  values={{ name: <b>John Doe</b>, numMessages: 1 }}
/>;
<FormattedHTMLMessage
  id="test"
  defaultMessage="test message"
  description="this is description"
/>;
<FormattedDate value={new Date(1459832991883)} />;

<FormattedTime value={new Date(1459832991883)} />;
<FormattedRelative value={Date.now()} />;
<FormattedNumber value={1000} />;
<FormattedPlural value={10} one="message" other="messages" />;
<IntlProvider locale="en">
  <div />
</IntlProvider>;

class TestComponent extends React.Component<{ name: string, intl: IntlShape }> {
  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        {`Hello ${this.props.name}`}
        {formatMessage(messageDescriptorMap.messagekey1)}
      </div>
    );
  }
}
    
class TestComponentWithExactProps extends React.Component<{| name: string, intl: IntlShape, |}> {
  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        {`Hello ${this.props.name}`}
        {formatMessage(messageDescriptorMap.messagekey1)}
      </div>
    );
  }
}

class TestComponentWithDefaultProps extends React.Component<{ name: string, intl: IntlShape }> {
  static defaultProps = {
    name: 'some name',
  };

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        {`Hello ${this.props.name}`}
        {formatMessage(messageDescriptorMap.messagekey1)}
      </div>
    );
  }
}

class TestComponentWithMaybeProp extends React.Component<{ name?: string, intl: IntlShape }> {
  render() {
    const { formatMessage } = this.props.intl;

    const name = this.props.name || '';

    return (
      <div>
        {`Hello ${name}`}
        {formatMessage(messageDescriptorMap.messagekey1)}
      </div>
    );
  }
}

describe("react-intl", () => {
  describe("injectIntl", () => {
    describe('Component with single required prop "name"', () => {
      const Component = injectIntl(TestComponent);
      
      it('works', () => {
        <Component name="test" />;
      });

      it('failed as prop "name" is missing', () => {
        // $ExpectError prop "name" is missing
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('failed as not supported prop is passed and "name" is missing', () => {
        // $ExpectError prop "name" type is incompatible
        <Component foo={1} />;
      });
    });

    describe('withRef=true', () => {
      const Component = injectIntl(TestComponent, { withRef: true });
      
      it('works', () => {
        <Component name="test" />;
      });

      it('failed as prop "name" is missing', () => {
        // $ExpectError prop "name" is missing
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('failed as not supported prop is passed and "name" is missing', () => {
        // $ExpectError prop "name" type is incompatible
        <Component foo={1} />;
      });
    });

    describe('Component with exact props', () => {
      const Component = injectIntl(TestComponentWithExactProps);
      
      it('works', () => {
        <Component name="test" />;
      });

      it('failed as prop "name" is missing', () => {
        // $ExpectError prop "name" is missing
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('failed as not supported prop is passed and "name" is missing', () => {
        // $ExpectError prop "name" type is incompatible
        <Component foo={1} />;
      });
    });

    describe('Component with default props', () => {
      const Component = injectIntl(TestComponentWithDefaultProps);
      
      it('works', () => {
        <Component name="test" />;
      });

      it('works as "name" prop has default value', () => {
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('works as "name" prop has default value and foo is ignored', () => {
        <Component foo={1} />;
      });
    });

    describe('Component with with maybe prop', () => {
      const Component = injectIntl(TestComponentWithMaybeProp);
      
      it('works', () => {
        <Component name="test" />;
      });

      it('works as prop "name" is not required', () => {
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('works as prop "name" is not required and foo is ignored', () => {
        <Component foo={1} />;
      });
    });

    describe('Functional Component with single required prop "name"', () => {
      const Component = injectIntl(
        (props: { intl: IntlShape, name: string }) => {
          const { formatMessage } = props.intl;

          return (
            <div>
              {`Hello ${props.name}`}
              {formatMessage(messageDescriptorMap.messagekey1)}
            </div>
          );
        }
      );
      
      it('works', () => {
        <Component name="test" />;
      });

      it('failed as prop "name" is missing', () => {
        // $ExpectError prop "name" is missing
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('failed as not supported prop is passed and "name" is missing', () => {
        // $ExpectError prop "name" type is incompatible
        <Component foo={1} />;
      });
    });

    describe('Functional Component with default props', () => {
      const FuncComponent = (props: { intl: IntlShape, name: string }) => {
        const { formatMessage } = props.intl;

        return (
          <div>
            {`Hello ${props.name}`}
            {formatMessage(messageDescriptorMap.messagekey1)}
          </div>
        );
      };

      FuncComponent.defaultProps = {
        name: 'some name',
      };

      const Component = injectIntl(FuncComponent);
      
      it('works', () => {
        <Component name="test" />;
      });

      it('works as "name" prop has default value', () => {
        <Component />;
      });

      it('failed as prop "name" type is incompatible', () => {
        // $ExpectError prop "name" type is incompatible
        <Component name={1} />;
      });

      it('works as "name" prop has default value and foo is ignored', () => {
        <Component foo={1} />;
      });
    });

    describe('intl methods', () => {

      it('formatDate', () => {
        const DateComponent: React.ComponentType<{}> = injectIntl((props: { intl: IntlShape }) => {
          const { formatDate } = props.intl;
          return (
            <div>
              {formatDate(new Date(1459832991883))}
            </div>
          );
        });

        <DateComponent />;
      });

      it('formatTime', () => {
        const TimeComponent: React.ComponentType<{}> = injectIntl((props: { intl: IntlShape }) => {
          const { formatTime } = props.intl;
          return (
            <div>
              {formatTime(new Date(1459832991883))}
            </div>
          );
        });

        <TimeComponent />;
      });

      it('formatRelative', () => {
        const RelativeComponent: React.ComponentType<{}> = injectIntl((props: { intl: IntlShape }) => {
          const { formatRelative } = props.intl;
          return (
            <div>
              {formatRelative(Date.now())}
            </div>
          );
        });

        <RelativeComponent />;
      });

      it('formatNumber', () => {
        const NumberComponent: React.ComponentType<{}> = injectIntl((props: { intl: IntlShape }) => {
          const { formatNumber } = props.intl;
          return (
            <div>
              {formatNumber(1000)}
            </div>
          );
        });

        <NumberComponent />;
      });
      
      it('formatNumber', () => {
        const PluralComponent: React.ComponentType<{}> = injectIntl((props: { intl: IntlShape }) => {
          const { formatPlural } = props.intl;
          return (
            <div>
              {formatPlural(10, { one: "message", other: "messages" })}
            </div>
          );
        });

        <PluralComponent />;
      });
    });
  });
});