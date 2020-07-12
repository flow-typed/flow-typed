// @flow
import balanced from 'balanced-match';


balanced('{', '}', 'pre{in{nested}}post');
balanced('{', '}', 'pre{first}between{second}post');
balanced(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post');

// $FlowExpectedError
balanced(42, 42, 'string');
// $FlowExpectedError
balanced('{', '}', 42);


balanced.range('{', '}', 'pre{in{nested}}post');
balanced.range('{', '}', 'pre{first}between{second}post');

// $FlowExpectedError
balanced.range(42, 42, 'string');
// $FlowExpectedError
balanced.range('{', '}', 42);
