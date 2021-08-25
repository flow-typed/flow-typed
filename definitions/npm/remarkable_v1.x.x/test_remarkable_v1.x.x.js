// @flow

import Remarkable from 'remarkable';

/* Trivial case */

// $FlowExpectedError[cannot-resolve-name]
remarkable.foo();

const rmk = new Remarkable();

// $FlowExpectedError[prop-missing]
rmk.foo();

/* Remarkable#parse() */
rmk.parse('');
// $FlowExpectedError[incompatible-call]
rmk.parse(true);
// $FlowExpectedError[incompatible-call]
rmk.parse(1);

/* Remarkable#parseInline() */
rmk.parseInline('');
// $FlowExpectedError[incompatible-call]
rmk.parseInline(true);
// $FlowExpectedError[incompatible-call]
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
// $FlowExpectedError[incompatible-call]
rmk.render(true);

/* Remarkable#renderInline() */
rmk.renderInline('');
// $FlowExpectedError[incompatible-call]
rmk.renderInline(true);
