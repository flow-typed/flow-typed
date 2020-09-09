// @flow
import ReactHighlightWords from 'react-highlight-words';

// $FlowExpectedError
const A = <ReactHighlightWords />;

// $FlowExpectedError
const B = <ReactHighlightWords searchWords={[1, 2, 3]} textToHighlight="The dog jumped over the fox" />

// $FlowExpectedError
const C = <ReactHighlightWords searchWords={'dog', 'cat', 'worm'} textToHighlight={1} />
