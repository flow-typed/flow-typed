/* @flow */
import React, { Component } from "react";
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
import type { IntlShape } from "react-intl-with-data-message-id";

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

class TestComponent extends Component {
  render() {
    return React.createElement("div", null, `Hello ppl`);
  }
}
const InjectedTestComponent: ReactClass<*> = injectIntl(TestComponent);
const InjectedTestComponentWithRef: ReactClass<*> = injectIntl(TestComponent, {
  withRef: true
});
// $ExpectError void. This type is incompatible with ReactClass<*>
const FailingInjectedTestComponent: void = injectIntl(TestComponent);

const MessageComponent: ReactClass<*> = injectIntl(
  (props: { intl: IntlShape }) => {
    const { formatMessage } = props.intl;
    return <div>{formatMessage(messageDescriptorMap.messagekey1)}</div>;
  }
);
// const HTMLMessageComponent: ReactClass<
//   *,
// > = injectIntl((props: { intl: IntlShape }) => {
//   const { formatHTMLMessage } = props.intl;
//   return <div>{formatHTMLMessage(messageDescriptorMap.messagekey2)}</div>;
// });
const DateComponent: ReactClass<*> = injectIntl(
  (props: { intl: IntlShape }) => {
    const { formatDate } = props.intl;
    return <div>{formatDate(new Date(1459832991883))}</div>;
  }
);
const TimeComponent: ReactClass<*> = injectIntl(
  (props: { intl: IntlShape }) => {
    const { formatTime } = props.intl;
    return <div>{formatTime(new Date(1459832991883))}</div>;
  }
);
const RelativeComponent: ReactClass<*> = injectIntl(
  (props: { intl: IntlShape }) => {
    const { formatRelative } = props.intl;
    return <div>{formatRelative(Date.now())}</div>;
  }
);
const NumberComponent: ReactClass<*> = injectIntl(
  (props: { intl: IntlShape }) => {
    const { formatNumber } = props.intl;
    return <div>{formatNumber(1000)}</div>;
  }
);
const PluralComponent: ReactClass<*> = injectIntl(
  (props: { intl: IntlShape }) => {
    const { formatPlural } = props.intl;
    return <div>{formatPlural(10, { one: "message", other: "messages" })}</div>;
  }
);

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
<IntlProvider locale="en" />;
