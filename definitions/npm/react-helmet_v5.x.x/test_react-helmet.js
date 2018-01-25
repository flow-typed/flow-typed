// @flow
import React from 'react';
import Helmet from 'react-helmet';
const HelmetComponent = () => (
  <Helmet
    htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
    title="My Title"
    titleTemplate="MySite.com - %s"
    defaultTitle="My Default Title"
    base={{"target": "_blank", "href": "http://mysite.com/"}}
    meta={[
      {"name": "description", "content": "Helmet application"},
      {"property": "og:type", "content": "article"}
    ]}
    link={[
      {"rel": "canonical", "href": "http://mysite.com/example"},
      {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
      {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
    ]}
    script={[
      {"src": "http://include.com/pathtojs.js", "type": "text/javascript"},
      {"type": "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
    ]}
    onChangeClientState={(newState) => console.log(newState)}
  />
)


const fail = () => (
    // $ExpectError
    <Helmet title={{}} />
)

// rewind and renderStatic are aliases
const heads = [Helmet.rewind(), Helmet.renderStatic()];

heads.forEach((head) => {
  (head.htmlAttributes.toString(): string);
  (head.title.toString(): string);
  (head.base.toString(): string);
  (head.meta.toString(): string);
  (head.link.toString(): string);
  (head.script.toString(): string);
  (head.style.toString(): string);

  // $ExpectError
  (head.htmlAttributes.toString(): boolean);
  // $ExpectError
  (head.title.toString(): boolean);
  // $ExpectError
  (head.base.toString(): boolean);
  // $ExpectError
  (head.meta.toString(): boolean);
  // $ExpectError
  (head.link.toString(): boolean);
  // $ExpectError
  (head.script.toString(): boolean);
  // $ExpectError
  (head.style.toString(): boolean);
});
