// @flow
import ReactHighlightedWords from 'react-highlighted-words';

//
const A = <ReactHighlightedWords />;
// $ExpectError missing props searchWords and textToHighlight
const B = <ReactHighlightedWords searchWords={[1, 2, 3]} textToHighlight="The dog jumped over the fox" />
// $ExpectError incorrect prop type of number[] given
const C = <ReactHighlightedWords searchWords={'dog', 'cat', 'worm'} textToHighlight={1} />
// $ExpectError incorrect prop type of number given
