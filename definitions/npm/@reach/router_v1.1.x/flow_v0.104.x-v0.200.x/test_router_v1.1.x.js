// @flow
import * as React from 'react';

import {
  Router,
  Link,
  Redirect,
  Match,
  navigate,
  Location,
  LocationProvider,
  ServerLocation,
  createHistory,
  createMemorySource,
  isRedirect,
  redirectTo,
  type MatchProps,
  type LinkProps,
} from '@reach/router';

import type { DefaultRouteProps, RouteProps } from '@reach/router';

import { it, describe } from 'flow-typed-test';

describe('@reach/router', () => {
  describe('Router', () => {
    it('works', () => {
      <Router basepath="/" primary={true}>
        <div />
      </Router>;
    });

    it('raises error', () => {
      // $FlowExpectedError - basepath must be a string
      <Router basepath={{}} />;
      // $FlowExpectedError - primary must be a boolean
      <Router primary={{}} />;
      // $FlowExpectedError - children must be a React$Node
      <Router>{Array}</Router>;
    });
  });

  describe('DefaultRoute', () => {
    const DefaultRoute = (props: DefaultRouteProps) => <div {...props} />;

    it('works', () => {
      <DefaultRoute default />;
      <DefaultRoute default>
        <div />
      </DefaultRoute>;
    });

    it('raises error', () => {
      // $FlowExpectedError - default must be a boolean
      <DefaultRoute default={{}} />;
      // $FlowExpectedError - children must be a React$Node
      <DefaultRoute default>{Array}</DefaultRoute>;
    });
  });

  describe('Route', () => {
    const Route = (props: RouteProps) => <div {...props} />;

    it('works', () => {
      <Route path="/" />;
      <Route path="invoice/:invoiceId" />;
      <Route path="admin/*" />;
      <Route path="" custom />;
      <Route path="/">
        <div />
      </Route>;
    });

    it('raises error', () => {
      // $FlowExpectedError - path must be a string
      <Route path={{}} />;
      // $FlowExpectedError - children must be a React$Node
      <Route path="/">{Array}</Route>;
    });
  });

  describe('Link', () => {
    it('works', () => {
      <Link to="/" replace custom>
        <div />
      </Link>;
    });

    it('raises error', () => {
      // $FlowExpectedError - children must be a React$Node
      <Link to="/">{Array}</Link>;
      // $FlowExpectedError - to must be a string
      <Link to={{}} />;
      // $FlowExpectedError - href isn't available
      <Link href="/" />;
    });
  });

  describe('Redirect', () => {
    it('works', () => {
      <Redirect from="aboutus" to="about-us" />;
      <Redirect from="users/:userId" to="profile/:userId" />;
      <Redirect to="/" noThrow />;
      <Redirect to="/state" state={{srcUrl: '/'}} />;
    });

    it('raises error', () => {
      // $FlowExpectedError - from must be a string
      <Redirect from={{}} to="/" />;
      // $FlowExpectedError - to must be a string
      <Redirect to={{}} />;
      // $FlowExpectedError - noThrow must be a boolean
      <Redirect to="/" noThrow="" />;
    });
  });

  describe('Match', () => {
    it('works', () => {
      <Match path="/">
        {props =>
          props.match ? <div>Hot {props.match.item}</div> : <div>Uncool</div>
        }
      </Match>;
    });

    it('raises error', () => {
      // $FlowExpectedError - children must be a function
      <Match>
        <div />
      </Match>;
    });

    describe('generic magic', () => {
      type Params = {
        articleId: string,
        commentId: string,
        ...
      };

      /*
      In the future (https://github.com/facebook/flow/issues/7672) we can use this syntax:

      <Match<Params>>
        {props => {
          if (props.match) {
            (props.match.articleId: string);
          }
        }}
      </Match>;

      But now you need to create a wrapper with a type definition:

      */
      const MatchItem = (props: MatchProps<Params>) => Match<Params>(props);

      it('should define more pure type for match prop', () => {
        <MatchItem path="/:articleId/:commentId">
          {props => {
            if (props.match) {
              (props.match.articleId: string);
              (props.match.commentId: string);

              // $FlowExpectedError - `match` is exact type
              (props.match.abc: number);
              // $FlowExpectedError - `articleId` prop must be string
              (props.match.articleId: boolean);

              return <div>Cool</div>;
            }

            return <div>Uncool</div>;
          }}
        </MatchItem>;
      });
    });
  });

  describe('navigate', () => {
    it('works', () => {
      navigate('/');
      navigate('/', { state: {}, redirect: true });
    });

    it('raises error', () => {
      // $FlowExpectedError - first param must be a string
      navigate({});
    });
  });

  describe('Location', () => {
    it('works', () => {
      <Location>{props => <div />}</Location>;
    });

    it('raises error', () => {
      // $FlowExpectedError - children must be a function
      <Location>
        <div />
      </Location>;
    });
  });

  describe('LocationProvider', () => {
    it('works', () => {
      const history = createHistory(window);

      <LocationProvider history={history}>
        <div>Alright, we've established some location context</div>
      </LocationProvider>;
    });

    it('raises error', () => {
      // $FlowExpectedError - history must be an instance of History
      <LocationProvider history={{}}>
        <div>Alright, we've established some location context</div>
      </LocationProvider>;
    });
  });

  describe('ServerLocation', () => {
    it('works', () => {
      <ServerLocation url="/groups/123">
        <div />
      </ServerLocation>;
    });

    it('raises error', () => {
      // $FlowExpectedError - url must be a string
      <ServerLocation url={{}}>
        <div />
      </ServerLocation>;
    });
  });

  describe('createHistory', () => {
    it('works', () => {
      createHistory(window);
    });

    it('raises error', () => {
      // $FlowExpectedError - first param must implements HistorySource
      createHistory({});
    });
  });

  describe('createMemorySource', () => {
    it('works', () => {
      createMemorySource('/starting/url');
    });

    it('raises error', () => {
      // $FlowExpectedError - first param must be a string
      createMemorySource({});
    });
  });

  describe('isRedirect', () => {
    it('works', () => {
      isRedirect({});
    });
  });

  describe('redirectTo', () => {
    it('works', () => {
      redirectTo('/');
    });

    it('raises error', () => {
      // $FlowExpectedError - first param must be a string
      redirectTo({});
    });
  });
});
