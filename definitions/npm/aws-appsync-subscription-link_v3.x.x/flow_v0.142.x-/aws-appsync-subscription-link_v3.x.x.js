declare module "aws-appsync-subscription-link" {
  import type { ApolloLink } from "@apollo/client";

  /**
   * A function that, when invoked, returns a promise that will be fulfilled with
   * a value of type T.
   *
   * Imported from @aws-sdk/types
   *
   * @example A function that reads credentials from shared SDK configuration
   * files, assuming roles and collecting MFA tokens as necessary.
   */
  declare interface Provider<T> {
    (): Promise<T>;
  }

  /**
   * An object representing temporary or permanent AWS credentials.
   *
   * Imported from @aws-sdk/types
   */
  declare interface Credentials {
    /**
     * AWS access key ID
     */
    +accessKeyId: string;

    /**
     * AWS secret access key
     */
    +secretAccessKey: string;

    /**
     * A security or session token to use with these credentials. Usually
     * present for temporary credentials.
     */
    +sessionToken?: string;

    /**
     * A {Date} when these credentials will no longer be accepted.
     */
    +expiration?: Date;
  }

  // Imported from @aws-sdk/types
  declare type CredentialProvider = Provider<Credentials>;

  declare var CONTROL_EVENTS_KEY: "@@controlEvents";

  declare var AUTH_TYPE: {|
    +NONE: "NONE", // "NONE"
    +API_KEY: "API_KEY", // "API_KEY"
    +AWS_IAM: "AWS_IAM", // "AWS_IAM"
    +AMAZON_COGNITO_USER_POOLS: "AMAZON_COGNITO_USER_POOLS", // "AMAZON_COGNITO_USER_POOLS"
    +OPENID_CONNECT: "OPENID_CONNECT", // "OPENID_CONNECT"
    +AWS_LAMBDA: "AWS_LAMBDA", // "AWS_LAMBDA"
  |};

  declare type AuthOptionsNone = {|
    type: typeof AUTH_TYPE.NONE,
  |};
  declare type AuthOptionsIAM = {|
    type: typeof AUTH_TYPE.AWS_IAM,
    credentials:
      | (() =>
      | Credentials
      | CredentialProvider
      | Promise<Credentials | CredentialProvider | null>)
      | Credentials
      | CredentialProvider
      | null,
  |};
  declare type AuthOptionsApiKey = {|
    type: typeof AUTH_TYPE.API_KEY,
    apiKey: (() => string | Promise<string>) | string,
  |};
  declare type AuthOptionsOAuth = {|
    type: typeof AUTH_TYPE.AMAZON_COGNITO_USER_POOLS | typeof AUTH_TYPE.OPENID_CONNECT,
    jwtToken: (() => string | Promise<string>) | string,
  |};
  declare type AuthOptionsLambda = {|
    type: typeof AUTH_TYPE.AWS_LAMBDA,
    token: (() => string | Promise<string>) | string,
  |};
  declare type AuthOptions =
    | AuthOptionsNone
    | AuthOptionsIAM
    | AuthOptionsApiKey
    | AuthOptionsOAuth
    | AuthOptionsLambda;
  declare type UrlInfo = {|
    url: string,
    auth: AuthOptions,
    region: string,
  |};
  declare type AppSyncRealTimeSubscriptionConfig = {|
    ...UrlInfo,
    ...{|
      keepAliveTimeoutMs?: number,
    |},
  |};
  declare function createSubscriptionHandshakeLink(
    args: AppSyncRealTimeSubscriptionConfig,
    resultsFetcherLink?: ApolloLink
  ): ApolloLink;

  declare function createSubscriptionHandshakeLink(
    url: string,
    resultsFetcherLink?: ApolloLink
  ): ApolloLink;
}
