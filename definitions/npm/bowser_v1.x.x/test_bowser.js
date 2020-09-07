// @flow
import bowser from 'bowser'

const result: boolean = bowser.check({ msie: '11' })

// $FlowExpectedError
const isChrome: string = bowser.chrome
