// @flow

"use strict";
const React = require("react");
const reduxOidc = require("redux-oidc");
// $ExpectError: flow-typed doesn't support pulling in _other_ modules yet?
const redux = require("redux");
// This was also attempted, but still no joy.
// See https://github.com/flowtype/flow-typed/issues/1331
// const redux = require('../../redux_v3.x.x/flow_v0.33.x-/redux_v3.x.x.js')

const CallbackComponent = reduxOidc.CallbackComponent;
const OidcProvider = reduxOidc.OidcProvider;

// createUserManager takes a config.
const userManagerConfig = {
  client_id: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  authority: "https://some-authority.org/oidc",
  redirect_uri: "http://base/#/callback",
  response_type: "token id_token",
  scope: "openid profile email",
  loadUserInfo: false,
  automaticSilentRenew: true,
  silent_redirect_uri: "http://base/oidc-silent-renew.html",
  accessTokenExpiringNotificationTime: 598
};

const userManager = reduxOidc.createUserManager(userManagerConfig);

// The UserManager can do redirects for signins/outs.
userManager.signinRedirect();
userManager.signoutRedirect();

// The reducer has a user
const user = reduxOidc.reducer.user;

// $ExpectError: The user could be null/undefined.
console.log(user.expired);

if (user) {
  console.log(user.expired);
}

type Action = {
  type: "foo"
};
type State = {
  foo: string
};
// redux-oidc provides some components.
const reducer = (state: State, action: Action) => action;
const store = redux.createStore(redux.combineReducers([reducer]));

const StatelessComponent = () => {
  return (
    <div>
      <CallbackComponent
        userManager={userManager}
        successCallback={() => console.log("success!")}
        errorCallback={() => console.log("error!")}
      />
      <OidcProvider store={store} userManager={userManager} />
    </div>
  );
};

// There's a utility function for silent renews.
reduxOidc.processSilentRenew();
