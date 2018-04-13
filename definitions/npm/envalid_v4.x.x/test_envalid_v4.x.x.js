import { bool, type ValidatorSpec } from 'envalid'

const booleanValidatorSpec: ValidatorSpec<boolean> = bool()

// $ExpectError
const invalidBooleanValidatorSpec: ValidatorSpec<number> = bool()
