// @flow
import * as React from 'react';
import Media from 'react-media';

// $FlowExpectedError[incompatible-type]
const queryError = <Media query={1} />;
// $FlowExpectedError[incompatible-type]
const defaultMatchesError = <Media defaultMatches={1}/>;
// $FlowExpectedError[incompatible-type]
const renderError = <Media render={12} />;
// $FlowExpectedError[incompatible-type]
const childrenError = <Media>{(matches: number) => matches}</Media>;

const str = <Media query="max-width: 500px" />;
const obj = <Media query={{maxWidth: 500, minWidth: '13em'}} />;
const ary = <Media query={[{maxWidth: 500, minWidth: '13em'}, { orientation: 'landscape' }]} />;
const render = <Media query={[{maxWidth: 500, minWidth: '13em'}, { orientation: 'landscape' }]} render={() => <div/>} />;
const children = <Media query={[{maxWidth: 500, minWidth: '13em'}, { orientation: 'landscape' }]}>{(matches: boolean) => <div/>}</Media>;

// https://github.com/ReactTraining/react-media/tree/next#queries
const MatchesObject = () => (
  <Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }}>
    {matches => (
      <>
        {matches.small && <p>I am small!</p>}
        {matches.medium && <p>I am medium!</p>}
        {matches.large && <p>I am large!</p>}
      </>
    )}
  </Media>
);

// https://github.com/ReactTraining/react-media/tree/next#queries-1
const QueriesStyle = () => (
  <>
    <Media queries={{ small: { maxWidth: 599 } }}>
      {matches =>
        matches.small ? (
          <p>The document is less than 600px wide.</p>
        ) : (
          <p>The document is at least 600px wide.</p>
        )
      }
    </Media>
    <Media queries={{ small: "(max-width: 599px)" }}>
      {matches =>
        matches.small ? (
          <p>The document is less than 600px wide.</p>
        ) : (
          <p>The document is at least 600px wide.</p>
        )
      }
    </Media>
  </>
);

// https://github.com/ReactTraining/react-media/tree/next#onchange
const OnChange = () => (
  <Media
    query={{ small: "(max-width: 599px)" }}
    onChange={matches => {
      matches.small
        ? alert('The document is less than 600px wide.')
        : alert('The document is at least 600px wide.')
    }}
  />
)
