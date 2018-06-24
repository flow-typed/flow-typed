import BigNumber from 'bignumber.js'

const a = new BigNumber(123.4567)
const b = BigNumber('123456.7e-3')
const c = BigNumber(a)

a.isEqualTo(b) && b.isEqualTo(c) && c.isEqualTo(a)

BigNumber(1011, 2)
BigNumber('zz.9', 36)
