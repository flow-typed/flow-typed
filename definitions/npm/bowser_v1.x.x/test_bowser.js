// @flow
import bowser from 'bowser'

const result: boolean = bowser.check({ msie: '11' })

// $ExpectError
const isChrome: string = bowser.chrome
