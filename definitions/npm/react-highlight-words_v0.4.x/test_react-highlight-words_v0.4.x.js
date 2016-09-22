// @flow
import ReactHighlightWords from 'react-highlight-words';

//
const A = <ReactHighlightWords />;
// $ExpectError missing props searchWords and textToHighlight
const B = <ReactHighlightWords searchWords={[1, 2, 3]} textToHighlight="The dog jumped over the fox" />
// $ExpectError incorrect prop type of number[] given
const C = <ReactHighlightWords searchWords={'dog', 'cat', 'worm'} textToHighlight={1} />
// $ExpectError incorrect prop type of number given
