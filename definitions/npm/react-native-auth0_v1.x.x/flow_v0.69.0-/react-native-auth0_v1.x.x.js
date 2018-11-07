declare module "react-native-auth0" {
  declare export type AuthorizationUrlParams = {
    responseType: string,
    redirectUri: string,
    state: string
  };

  declare export type CreateUserParams<T> = {
    email: string,
    username?: string,
    password: string,
    connection: string,
    metadata?: T
  };

  declare export type CreateUserResponse = {
    Id: string,
    emailVerified: boolean,
    email: string
  };

  declare export type ExchangeParams = {
    code: string,
    redirectUri: string,
    verifier: string
  };

  declare export type LogoutParams = {
    federated: boolean,
    clientId?: string,
    returnTo?: string
  };

  declare export type PasswordRealmParams = {
    username: string,
    password: string,
    realm: string,
    audience?: string,
    scope?: string
  };

  declare export type PasswordRealmResponse = {
    accessToken: string,
    expiresIn: number,
    idToken: string,
    scope: string,
    tokenType: "Bearer",
    refreshToken?: string
  };

  declare export type RefreshTokenParams = {
    refreshToken: string,
    scope?: string
  };

  declare export type RevokeParams = {
    refreshToken: string
  };

  declare export type UserInfoParams = {
    token: string
  };

  declare export type ResetPasswordParams = {
    email: string,
    connection: string
  };

  declare export type UserInfo = {
    email: string,
    emailVerified: boolean,
    name: string,
    nickname: string,
    picture: string,
    sub: string,
    updatedAt: string
  };
  declare export class Auth {
    authorizationUrl(params: AuthorizationUrlParams): string;
    createUser<T>(user: CreateUserParams<T>): Promise<CreateUserResponse>;
    exchange(params: ExchangeParams): Promise<string>;
    logoutUrl(params: LogoutParams): string;
    passwordRealm(params: PasswordRealmParams): Promise<PasswordRealmResponse>;
    refreshToken(params: RefreshTokenParams): Promise<any>;
    resetPassword(params: ResetPasswordParams): Promise<any>;
    revoke(params: RevokeParams): Promise<any>;
    userInfo(params: UserInfoParams): Promise<UserInfo>;
  }

  declare export type Auth0User<T> = {
    created_at: string,
    email: string,
    emailVerified: boolean,
    identities: any[],
    last_ip?: string,
    last_login?: string,
    logins_count: number,
    name: string,
    nickname: string,
    picture?: string,
    updated_at: string,
    userId: string,
    userMetadata?: T
  };

  declare export type GetUserParams = {|
    id: string
  |};

  declare export type PatchUserParams<T> = {|
    id: string,
    metadata: T
  |};

  declare export class Users {
    constructor(options: UsersOptions): Users;
    getUser<T>(parameters: GetUserParams): Promise<Auth0User<T>>;
    patchUser<T>(parameters: PatchUserParams<T>): Promise<Auth0User<T>>;
  }

  declare export type AuthorizeParams = {
    state?: string,
    nonce?: string,
    audience?: string,
    scope?: string,
    connection?: string,
    language?: string,
    prompt?: string
  };

  declare export type ClearSessionParams = {|
    federated: boolean
  |};

  declare export class WebAuth {
    authorize<T>(parameters: AuthorizeParams): Promise<T>;
    clearSession<T>(parameters?: ClearSessionParams): Promise<T>;
  }

  declare export type Auth0Options = {
    domain: string,
    clientId: string
  };

  declare export type UsersOptions = {
    baseUrl: $PropertyType<Auth0Options, "domain">,
    token: string
  };

  declare class Auth0 {
    constructor(options: Auth0Options): Auth0;
    auth: Auth;
    users(token: string): Users;
    webAuth: WebAuth;
  }

  declare export default typeof Auth0;
}
