// @flow
import ReactHighlightWords from 'react-highlight-words';

// $ExpectError
const A = <ReactHighlightWords />;

// $ExpectError
const B = <ReactHighlightWords searchWords={[1, 2, 3]} textToHighlight="The dog jumped over the fox" />

// $ExpectError
const C = <ReactHighlightWords searchWords={'dog', 'cat', 'worm'} textToHighlight={1} />
