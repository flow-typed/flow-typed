import createEnturService from '@entur/sdk'

const service = createEnturService({
  clientName: 'flow-typed'
})

// $FlowExpectedError[incompatible-type] wrong return type
const numb: number = createEnturService({
  clientName: 'flow-typed'
})
