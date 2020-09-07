// @flow

import Remarkable from 'remarkable';

/* Trivial case */

// $FlowExpectedError
remarkable.foo();

const rmk = new Remarkable();

// $FlowExpectedError
rmk.foo();


/* Remarkable#parse() */
rmk.parse('');
// $FlowExpectedError
rmk.parse(true);
// $FlowExpectedError
rmk.parse(1);

/* Remarkable#parseInline() */
rmk.parseInline('');
// $FlowExpectedError
rmk.parseInline(true);
// $FlowExpectedError
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
// $FlowExpectedError
rmk.render(true);

/* Remarkable#renderInline() */
rmk.renderInline('');
// $FlowExpectedError
rmk.renderInline(true);
