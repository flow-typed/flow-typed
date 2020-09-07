// @flow
import document from 'global/document';
import console from 'global/console';
import process from 'global/process';

// $FlowExpectedError document.body could be null
document.body.style.color = 'red';

document.addEventListener('click', () => {});

// $FlowExpectedError nonexisting method on console
console.badmethod('hello');

process.nextTick(() => {
	console.log('hello', process.cwd());
});

// $FlowExpectedError process.chdir takes a string
process.chdir(1);
