import {
  bool,
  cleanEnv,
  email,
  host,
  json,
  port,
  num,
  str,
  url,
  type ValidatorSpec
} from 'envalid'

const booleanValidatorSpec: ValidatorSpec<boolean> = bool()
const numberValidatorSpec: ValidatorSpec<number> = num()
const stringValidatorSpec: ValidatorSpec<string> = str()
const jsonValidatorSpec: ValidatorSpec<any> = json()
const urlValidatorSpec: ValidatorSpec<string> = url()
const emailValidatorSpec: ValidatorSpec<string> = email()
const hostValidatorSpec: ValidatorSpec<string> = host()
const portValidatorSpec: ValidatorSpec<number> = port()

const env1: { NODE_ENV: string } = cleanEnv({ NODE_ENV: 'TEST' }, {
  NODE_ENV: str()
})

// $ExpectError
const env2: { NODE_ENV: number } = cleanEnv({ NODE_ENV: 'TEST' }, {
  NODE_ENV: str()
})

// $ExpectError
const invalidBooleanValidatorSpec: ValidatorSpec<number> = bool()
