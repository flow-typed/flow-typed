// @flow
import loadScript from 'load-script';

loadScript('/example');

// $ExpectError
loadScript([]);

loadScript('google.js', { type: 'text/javascript' });

// $ExpectError
loadScript('google.js', { type: null });


loadScript('google.js', () => undefined);


loadScript('google.js', (err) => {
    // $ExpectError
    (err: Error)
    if (err) {
        (err: Error)
    }
});


loadScript('google.js', (err, el) => {
    (el: HTMLScriptElement);
    // $ExpectError
    (el: void);
});


loadScript('google.js', { type: 'text/handlebars'}, (err, el) => {
    (err: ?Error);
    (el: HTMLElement);
});

// $ExpectError
loadScript('google.js', { async: 'text/handlebars'}, (err, el) => {
    (err: ?Error);
    (el: HTMLElement);
});
