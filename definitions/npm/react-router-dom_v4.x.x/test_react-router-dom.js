import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  matchPath, type Match
} from 'react-router-dom';

// BrowserRouter
<BrowserRouter><div /></BrowserRouter>;
<BrowserRouter
  basename="/base"
  forceRefresh
  getUserConfirmation={(message, callback) => {}}
  keyLength={3}
>
  <div />
</BrowserRouter>;

// $ExpectError
<BrowserRouter basename={3} />;

// HashRouter
<HashRouter><div /></HashRouter>;
<HashRouter
  basename="/base"
  getUserConfirmation={(message, callback) => {}}
  hashType="noslash"
>
  <div />
</HashRouter>;

// $ExpectError
<HashRouter hashType="magic" />;

// Link
<Link to="/about">About</Link>;
<Link replace to="/about">About</Link>;
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}>
  About
</Link>;

// $ExpectError
<Link to={3} />;

// NavLink
<NavLink to="/about">About</NavLink>;
<NavLink
  to="/about"
  activeClassName="active"
  className="link"
  activeStyle={{ color: 'red' }}
  style={{ color: 'blue' }}
  isActive={(match, location) => true}
  strict
  exact
>
  About
</NavLink>;
<NavLink to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}>
  About
</NavLink>;

// $ExpectError
<NavLink />

// matchPath
const match: null | Match = matchPath('/the/pathname', '/the/:dynamicId', {
  exact: true,
  strict: false
})
const match2: null | Match = matchPath('/the/pathname', '/the/:dynamicId')

// $ExpectError
matchPath('/the/pathname')
// $ExpectError
matchPath()
// $ExpectError
const matchError: string = matchPath('/the/pathname', 'the/:dynamicId')
