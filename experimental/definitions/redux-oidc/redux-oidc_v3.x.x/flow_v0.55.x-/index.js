import type { Reducer, Store } from "redux";

declare module "redux-oidc" {
  declare type UserManager = {
    getUser: () => Promise<User<*>>,
    removeUser: () => Promise<*>,
    signinRedirect: (data?: {
      data: {
        redirectUrl: string
      }
    }) => Promise<*>,
    signinSilent: () => Promise<*>,
    signinPopup: () => Promise<*>,
    signoutRedirect: () => Promise<*>,
    signoutPopup: () => Promise<*>,
    querySessionStatus: () => Promise<*>,
    startSilentRenew: () => Promise<*>,
    stopSilentRenew: () => Promise<*>,
    clearStaleState: () => Promise<*>
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
    state: {
      redirectUrl: string
    }
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
  declare type OidcReducerState = {
    user: ?User<*>
  };
  declare type OidcReducer = Reducer<OidcReducerState, *>;

  declare function createUserManager(
    settings: UserManagerSettings
  ): UserManager;
  declare var reducer: OidcReducer;

  declare class CallbackComponent extends React$Component<{
    userManager: UserManager,
    successCallback: (user?: User<*>) => mixed,
    errorCallback?: () => mixed
  }> {}

  declare class OidcProvider extends React$Component<{
    store: Store<*, *>,
    userManager: UserManager
  }> {}

  declare function processSilentRenew(): void;
}
