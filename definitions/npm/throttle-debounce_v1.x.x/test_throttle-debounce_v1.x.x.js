import { throttle, debounce } from 'throttle-debounce'


const t1: () => string = throttle(1, () => '')
const t2: string = throttle(1, () => '')()

throttle(1, true, () => '', true)
throttle(1, true, () => '')
throttle(1, () => '', true)

const d1: () => string = debounce(1, () => '')
const d2: string = debounce(1, () => '')()

debounce(1, true, () => '')

// $ExpectError
debounce(() => '')
// $ExpectError
throttle(() => '')
