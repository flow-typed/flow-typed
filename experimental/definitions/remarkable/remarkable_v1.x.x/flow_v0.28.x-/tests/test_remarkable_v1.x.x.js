// @flow

import Remarkable from 'remarkable';

/* Trivial case */

// $ExpectError
remarkable.foo();

const rmk = new Remarkable();

// $ExpectError
rmk.foo();


/* Remarkable#parse() */
rmk.parse('');
// $ExpectError
rmk.parse(true);
// $ExpectError
rmk.parse(1);

/* Remarkable#parseInline() */
rmk.parseInline('');
// $ExpectError
rmk.parseInline(true);
// $ExpectError
rmk.parseInline(1);

/* Remarkable#set() */
rmk.set({ html: true });
rmk.set({ xhtmlOut: true });
rmk.set({ breaks: true });
rmk.set({ langPrefix: '' });
rmk.set({ linkify: true });
rmk.set({ typographer: true });
rmk.set({ quotes: '' });
rmk.set({ highlight: (str: string, lang: string) => '' });

/* Remarkable#render() */
rmk.render('');
// $ExpectError
rmk.render(true);

/* Remarkable#renderInline() */
rmk.renderInline('');
// $ExpectError
rmk.renderInline(true);
