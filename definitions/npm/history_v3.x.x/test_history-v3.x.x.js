// @flow
import createHistory from 'history/lib/createBrowserHistory';

const history = createHistory()

// Get the current location
const location = history.getCurrentLocation();

// Listen for changes to the current location
const unlisten = history.listen(location => {
  console.log(location.pathname)
})

// Push a new entry onto the history stack
history.push({
  pathname: '/the/path',
  search: '?a=query',

  // Extra location-specific state may be kept in session
  // storage instead of in the URL query string!
  state: { the: 'state' }
})

// When you're finished, stop the listener
unlisten()
