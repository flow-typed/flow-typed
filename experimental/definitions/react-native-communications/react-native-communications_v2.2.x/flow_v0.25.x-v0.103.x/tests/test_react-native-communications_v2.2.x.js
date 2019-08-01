// @flow

import { phonecall, email, text, textWithoutEncoding, web } from 'react-native-communications'

phonecall('12345678', false)
phonecall('12345678', true)
// $ExpectError
phonecall('12345678')
// $ExpectError
phonecall('12345678', 'true')

email()
email(['example@example.com'])
email(['example@example.com'], ['cc@example.com'], ['bcc@example.com'], 'subject', 'body')
// $ExpectError
email('example@example.com')
// $ExpectError
email(['example@example.com'], ['cc@example.com'])

text()
text('12345678')
text('12345678', 'body')
// $ExpectError
text(['12345678'])

textWithoutEncoding()
textWithoutEncoding('12345678')
textWithoutEncoding('12345678', 'body')
// $ExpectError
textWithoutEncoding(['12345678'])

web('example.com')
// $ExpectError
web()
// $ExpectError
web(['example.com'])
