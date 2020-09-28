// @flow
import loadScript from 'load-script';

loadScript('/example');

// $FlowExpectedError
loadScript([]);

loadScript('google.js', { type: 'text/javascript' });

// $FlowExpectedError
loadScript('google.js', { type: null });


loadScript('google.js', () => undefined);


loadScript('google.js', (err) => {
    // $FlowExpectedError
    (err: Error)
    if (err) {
        (err: Error)
    }
});


loadScript('google.js', (err, el) => {
    (el: HTMLScriptElement);
    // $FlowExpectedError
    (el: void);
});


loadScript('google.js', { type: 'text/handlebars'}, (err, el) => {
    (err: ?Error);
    (el: HTMLElement);
});

// $FlowExpectedError
loadScript('google.js', { async: 'text/handlebars'}, (err, el) => {
    (err: ?Error);
    (el: HTMLElement);
});
