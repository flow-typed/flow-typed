// @flow

type zeroArgumentEmail = () => void
type oneArgumentEmail = (to: Array<string>) => void
type fiveArgumentEmail = (to: Array<string>, cc: Array<string>, bcc: Array<string>, subject: string, body: string) => void

declare module 'react-native-communications' {
  declare module.exports: {
      phonecall: (phoneNumber: string, prompt: boolean) => void,
      email: & zeroArgumentEmail & oneArgumentEmail & fiveArgumentEmail,
      text: (phoneNumber?: string, body?: string) => void,
      textWithoutEncoding: (phoneNumber?: string, body?: string) => void,
      web: (address: string) => void,
  }
}
