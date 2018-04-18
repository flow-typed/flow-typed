// @flow
import document from 'global/document';
import console from 'global/console';
import process from 'global/process';

// $ExpectError document.body could be null
document.body.style.color = 'red';

document.addEventListener('click', () => {});

// $ExpectError nonexisting method on console
console.badmethod('hello');

process.nextTick(() => {
	console.log('hello', process.cwd());
});

// $ExpectError process.chdir takes a string
process.chdir(1);
