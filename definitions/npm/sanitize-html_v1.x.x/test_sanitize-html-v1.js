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
// $FlowExpectedError
const C: string = sanitize('<foo/>', {
  parser: false,
})
// $FlowExpectedError
const D: string = sanitize('<foo/>', { allowedClasses: { foo: true } })
