// @flow
import balanced from 'balanced-match';


balanced('{', '}', 'pre{in{nested}}post');
balanced('{', '}', 'pre{first}between{second}post');
balanced(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post');

// $ExpectError
balanced(42, 42, 'string');
// $ExpectError
balanced('{', '}', 42);


balanced.range('{', '}', 'pre{in{nested}}post');
balanced.range('{', '}', 'pre{first}between{second}post');

// $ExpectError
balanced.range(42, 42, 'string');
// $ExpectError
balanced.range('{', '}', 42);
