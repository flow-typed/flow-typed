// @flow
import matchMedia from 'matchmedia';

/* Trivial case */

/* query options */
matchMedia('q')
matchMedia('q', {})
matchMedia('q', { type: 'screen' })
matchMedia('q', { width: '1px' })
matchMedia('q', { height: '1px' })

// $FlowExpectedError
matchMedia('q', true)

// $FlowExpectedError
matchMedia('q', { type: 'foo' })
