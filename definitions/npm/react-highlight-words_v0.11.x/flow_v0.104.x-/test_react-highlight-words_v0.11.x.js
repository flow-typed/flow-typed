// @flow
import * as React from 'react';
import ReactHighlightWords from 'react-highlight-words';

<ReactHighlightWords searchWords={['dog', 'jumped', 'over']} textToHighlight="The dog jumped over the fox" />;

// $ExpectError searchWords wrong type
<ReactHighlightWords searchWords={[1,2,3]} textToHighlight="The dog jumped over the fox" />;

// $ExpectError textToHighlight wrong type
<ReactHighlightWords searchWords={['dog', 'jumped', 'over']} textToHighlight={123} />;

// $ExpectError missing required searchWords
<ReactHighlightWords textToHighlight="The dog jumped over the fox" />;

// $ExpectError missing required textToHighlight
<ReactHighlightWords searchWords={['dog', 'jumped', 'over']} />;

const findChunks = () => [''];

<ReactHighlightWords findChunks={findChunks} searchWords={['dog', 'jumped', 'over']} textToHighlight="The dog jumped over the fox" />;
