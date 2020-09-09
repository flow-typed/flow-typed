// @flow

import { phonecall, email, text, textWithoutEncoding, web } from 'react-native-communications'

phonecall('12345678', false)
phonecall('12345678', true)
// $FlowExpectedError
phonecall('12345678')
// $FlowExpectedError
phonecall('12345678', 'true')

email()
email(['example@example.com'])
email(['example@example.com'], ['cc@example.com'], ['bcc@example.com'], 'subject', 'body')
// $FlowExpectedError
email('example@example.com')
// $FlowExpectedError
email(['example@example.com'], ['cc@example.com'])

text()
text('12345678')
text('12345678', 'body')
// $FlowExpectedError
text(['12345678'])

textWithoutEncoding()
textWithoutEncoding('12345678')
textWithoutEncoding('12345678', 'body')
// $FlowExpectedError
textWithoutEncoding(['12345678'])

web('example.com')
// $FlowExpectedError
web()
// $FlowExpectedError
web(['example.com'])
