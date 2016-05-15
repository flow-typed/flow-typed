// @flow
import sanitize from 'sanitize-html';

(sanitize('<foo/>'): string)
const A: string = sanitize('<foo/>', {
  allowedTags: ['foo'],
})
const B: string = sanitize('<foo/>', {
  textFilter(text: string) {
    return 'bar';
  },
})
// $ExpectError
const C: string = sanitize('<foo/>', {
  parser: false,
})
// $ExpectError
const D: string = sanitize('<foo/>', {
  allowedClasses: {
    foo: true
  },
})
