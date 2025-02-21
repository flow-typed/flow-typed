// @flow

let tests = [
  // hasAttributes
  function (element: HTMLElement) {
    element.hasAttributes();

    // fails
    // $FlowExpectedError[extra-arg]
    element.hasAttributes('foo', 'bar');
  },

  // scrollIntoView
  function (element: HTMLElement) {
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({});
    element.scrollIntoView({behavior: 'smooth', block: 'end'});
    element.scrollIntoView({block: 'end'});
    element.scrollIntoView({behavior: 'smooth'});

    // fails
    // $FlowExpectedError[incompatible-call]
    element.scrollIntoView({behavior: 'invalid'});
    // $FlowExpectedError[incompatible-call]
    element.scrollIntoView({block: 'invalid'});
    // $FlowExpectedError[incompatible-call]
    element.scrollIntoView(1);
  },

  // functions with specific overloads
  function (element: HTMLElement) {
    const str: string = 'a';
    // broad
    element.getElementsByTagName(str) as HTMLCollection<HTMLElement>;
    element.getElementsByTagNameNS(null, str) as HTMLCollection<HTMLElement>;
    element.querySelector(str) as HTMLElement | null;
    element.querySelectorAll(str) as NodeList<HTMLElement>;

    // specific
    element.getElementsByTagName('a') as HTMLCollection<HTMLAnchorElement>;
    element.getElementsByTagNameNS(
      null,
      'a',
    ) as HTMLCollection<HTMLAnchorElement>;
    element.querySelector('a') as HTMLAnchorElement | null;
    element.querySelectorAll('a') as NodeList<HTMLAnchorElement>;

    // overly broad input (fails)
    // $FlowExpectedError[incompatible-cast]
    element.getElementsByTagName(str) as HTMLCollection<HTMLAnchorElement>;
    // $FlowExpectedError[incompatible-cast]
    element.getElementsByTagNameNS(
      null,
      str,
    ) as HTMLCollection<HTMLAnchorElement>;
    // $FlowExpectedError[incompatible-cast]
    element.querySelector(str) as HTMLAnchorElement | null;
    // $FlowExpectedError[incompatible-cast]
    element.querySelectorAll(str) as NodeList<HTMLAnchorElement>;

    // wrong specific input (fails)
    // $FlowExpectedError[incompatible-cast]
    element.getElementsByTagName('div') as HTMLCollection<HTMLAnchorElement>;
    // $FlowExpectedError[incompatible-cast]
    element.getElementsByTagNameNS(
      null,
      'div',
    ) as HTMLCollection<HTMLAnchorElement>;
    // $FlowExpectedError[incompatible-cast]
    element.querySelector('div') as HTMLAnchorElement | null;
    // $FlowExpectedError[incompatible-cast]
    element.querySelectorAll('div') as NodeList<HTMLAnchorElement>;
  },

  // focus
  function (element: HTMLElement) {
    element.focus();
    element.focus({});
    element.focus({preventScroll: true});
    element.focus({preventScroll: false});

    // fails
    // $FlowExpectedError[incompatible-call]
    element.focus({preventScroll: 'invalid'});
    // $FlowExpectedError[incompatible-call]
    element.focus(1);
  },
];
