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
} from "react-intl-with-data-message-id";
import type { IntlShape, MessageDescriptor, IntlInjectedComponentClass } from "react-intl-with-data-message-id";

intlShape({ foo: "bar" }, "propName", "TestComponentName");
// $FlowExpectedError number. This type is incompatible with void
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
// $FlowExpectedError number. This type is incompatible with void
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
// $FlowExpectedError foo is undefined
const messageDescriptorMap1 = defineMessages(messages).foo;
// $FlowExpectedError id and defaultMessage are required
const messageDescriptorMap2 = defineMessages({ message: {} });
// $FlowExpectedError array. This type is incompatible with MessageDescriptorMap
const messageDescriptorMap3: Array<string> = defineMessages(messages);
// $FlowExpectedError string. This type is incompatible with MessageDescriptorMap
const messageDescriptorMap4: string = defineMessages(messages);
const msg1:MessageDescriptor = messageDescriptorMap.messagekey1;
const msg2:MessageDescriptor = messageDescriptorMap.messagekey2_foo;
const msg3:MessageDescriptor = messageDescriptorMap.messagekey3;

class TestComponent extends React.Component<{
  name: string,
  intl: IntlShape,
  ...
}> {
  render() {
    return React.createElement("div", {}, `Hello ${this.props.name}`);
  }
}

const InjectedTestComponent: React.ComponentType<{ name: string, ... }> = injectIntl(
  TestComponent
);

const InjectedTestComponentWithRef: React.ComponentType<{ name: string, ... }> = injectIntl(TestComponent, {
  withRef: true
});

// $FlowExpectedError This type is incompatible
const BadPropsComponent: React.ComponentType<{ name: number, ... }> = injectIntl(
  TestComponent
);

// $FlowExpectedError This type is incompatible
const ExtraPropsComponent: React.ComponentType<{ foo: number, ... }> = injectIntl(
  TestComponent
);

// $FlowExpectedError void. This type is incompatible
const FailingInjectedTestComponent: void = injectIntl(TestComponent);

const MessageComponent: React.ComponentType<{...}> = injectIntl(
  (props: { intl: IntlShape, ... }) => {
    const { formatMessage } = props.intl;
    return (
      <div>
        {formatMessage(messageDescriptorMap.messagekey1)}
      </div>
    );
  }
);

type WithDefaultProps = {
  defaultProp: number,
  normalProp: number,
  ...
};

class TestComponentWithDefault extends React.Component<WithDefaultProps & { intl: IntlShape, ... }> {
  static defaultProps = { defaultProp: 1 };

  render() {
    return <div />
  }
}

const InjectedTestComponentWithDefault
  : IntlInjectedComponentClass<WithDefaultProps, { defaultProp: number, ... }>
  = injectIntl(TestComponentWithDefault);

// const HTMLMessageComponent: React.ComponentType<
//   *,
// > = injectIntl((props: { intl: IntlShape }) => {
//   const { formatHTMLMessage } = props.intl;
//   return <div>{formatHTMLMessage(messageDescriptorMap.messagekey2)}</div>;
// });
const DateComponent: React.ComponentType<
  any
> = injectIntl((props: { intl: IntlShape, ... }) => {
  const { formatDate } = props.intl;
  return (
    <div>
      {formatDate(new Date(1459832991883))}
    </div>
  );
});
const TimeComponent: React.ComponentType<
  any
> = injectIntl((props: { intl: IntlShape, ... }) => {
  const { formatTime } = props.intl;
  return (
    <div>
      {formatTime(new Date(1459832991883))}
    </div>
  );
});
const RelativeComponent: React.ComponentType<
  any
> = injectIntl((props: { intl: IntlShape, ... }) => {
  const { formatRelative } = props.intl;
  return (
    <div>
      {formatRelative(Date.now())}
    </div>
  );
});
const NumberComponent: React.ComponentType<
  any
> = injectIntl((props: { intl: IntlShape, ... }) => {
  const { formatNumber } = props.intl;
  return (
    <div>
      {formatNumber(1000)}
    </div>
  );
});
const PluralComponent: React.ComponentType<
  any
> = injectIntl((props: { intl: IntlShape, ... }) => {
  const { formatPlural } = props.intl;
  return (
    <div>
      {formatPlural(10, { one: "message", other: "messages" })}
    </div>
  );
});

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
