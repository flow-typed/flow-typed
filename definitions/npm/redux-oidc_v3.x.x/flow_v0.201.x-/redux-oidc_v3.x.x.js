import type { Reducer, Store } from "redux";

declare module "redux-oidc" {
  declare type UserManager = {
    getUser: () => Promise<User<any>>,
    removeUser: () => Promise<any>,
    signinRedirect: (data?: { data: { redirectUrl: string, ... }, ... }) => Promise<any>,
    signinSilent: () => Promise<any>,
    signinPopup: () => Promise<any>,
    signoutRedirect: () => Promise<any>,
    signoutPopup: () => Promise<any>,
    querySessionStatus: () => Promise<any>,
    startSilentRenew: () => Promise<any>,
    stopSilentRenew: () => Promise<any>,
    clearStaleState: () => Promise<any>,
    ...
  };
  declare type User<P> = {
    id_token: string,
    access_token: string,
    token_type: string,
    scope: string,
    expires_at: number,
    +expires_in: ?boolean,
    +expired: ?boolean,
    +scopes: Array<string>,
    profile: P,
    state: { redirectUrl: string, ... },
    ...
  };
  declare type UserManagerSettings = {|
    client_id: string,
    authority: string,
    redirect_uri: string,
    response_type?: string,
    scope?: string,
    loadUserInfo?: boolean,
    silent_redirect_uri?: string,
    automaticSilentRenew?: boolean,
    accessTokenExpiringNotificationTime?: number,
    silentRequestTimeout?: number,
    filterProtocolClaims?: boolean,
    post_logout_redirect_uri?: string
  |};
  declare type OidcReducerState = { user: ?User<any>, ... };
  declare type OidcReducer = Reducer<OidcReducerState, any>;

  declare function createUserManager(
    settings: UserManagerSettings
  ): UserManager;
  declare var reducer: OidcReducer;

  declare class CallbackComponent extends React$Component<{
    userManager: UserManager,
    successCallback: (user?: User<any>) => mixed,
    errorCallback?: () => mixed,
    ...
  }> {}

  declare class OidcProvider extends React$Component<{
    store: Store<any, any>,
    userManager: UserManager,
    ...
  }> {}

  declare function processSilentRenew(): void;
}
