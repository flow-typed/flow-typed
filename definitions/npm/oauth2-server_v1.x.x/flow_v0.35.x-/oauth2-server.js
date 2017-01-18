/**
 * Flowtype definitions for oauth2-server
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'oauth2-server' {

    declare module.exports: typeof o
    declare interface o$OAuth2Server {
        grant(): RequestHandler,
            authorise(): any,
            errorHandler(): any
    }

    declare interface o$Config {

        /**
         * Model object
         */
        model: {},

            /**
             * grant types you wish to support, currently the module supports authorization_code,
             * password, refresh_token and client_credentials
             */
            grants: string[],

            /**
             * If true errors will be logged to console. You may also pass a custom function, in
             * which case that function will be called with the error as its first argument
            Default: false
            */
            debug?: boolean,

            /**
             * Life of access tokens in seconds
             * If null, tokens will considered to never expire
            Default: 3600
            */
            accessTokenLifetime?: number,

            /**
             * Life of refresh tokens in seconds
             * If null, tokens will considered to never expire
            Default: 1209600
            */
            refreshTokenLifetime?: number,

            /**
             * Life of auth codes in seconds
             * Default: 30
             */
            authCodeLifetime?: number,

            /**
             * Regex to sanity check client id against before checking model. Note: the default
             * just matches common client_id structures, change as needed
            Default: /^[a-z0-9-_]{3,40}$/i
            */
            clientIdRegex?: RegExp,

            /**
             * If true, non grant errors will not be handled internally (so you can ensure a
             * consistent format with the rest of your api)
             */
            passthroughErrors?: boolean,

            /**
             * If true, next will be called even if a response has been sent (you probably don't want this)
             */
            continueAfterResponse?: boolean
    }

    declare interface o$BaseModel {

        /**
         * 
         * @param bearerToken - The bearer token (access token) that has been provided
         * @param callback 
         */
        getAccessToken(bearerToken: string, callback: o$GetAccessTokenCallback): void,

            /**
             * 
             * @param clientId 
             * @param clientSecret - If null, omit from search query (only search by clientId)
             * @param callback 
             */
            getClient(clientId: string, clientSecret: string, callback: o$GetClientCallback): void,

            /**
             * 
             * @param clientId 
             * @param grantType 
             * @param callback 
             */
            grantTypeAllowed(
                clientId: string,
                grantType: string,
                callback: o$GrantTypeAllowedCallback): void,

            /**
             * 
             * @param accessToken 
             * @param clientId 
             * @param expires 
             * @param user 
             * @param callback 
             */
            saveAccessToken(
                accessToken: string,
                clientId: string,
                expires: Date,
                user: o$User,
                callback: o$SaveAccessTokenCallback): void
    }

    declare type o$AuthorizationCodeModel = {

        /**
         * 
         * @param authCode 
         * @param callback 
         */
        getAuthCode(authCode: string, callback: o$GetAuthCodeCallback): void,

        /**
         * 
         * @param authCode 
         * @param clientId 
         * @param expires 
         * @param user - Whatever was passed as user to the codeGrant function (see example)
         * @param callback 
         */
        saveAuthCode(
            authCode: string,
            clientId: string,
            expires: Date,
            user: o$User | string,
            callback: o$SaveAuthCodeCallback): void
    } & o$BaseModel


    declare type o$PasswordModel = {

        /**
         * 
         * @param username 
         * @param password 
         * @param callback 
         */
        getUser(username: string, password: string, callback: o$GetUserCallback): void
    } & o$BaseModel


    declare type o$RefreshTokenModel = {

        /**
         * 
         * @param refreshToken 
         * @param clientId 
         * @param expires 
         * @param user 
         * @param callback 
         */
        saveRefreshToken(
            refreshToken: string,
            clientId: string,
            expires: Date,
            user: o$User,
            callback: o$SaveRefreshTokenCallback): void,

        /**
         * 
         * @param refreshToken - The bearer token (refresh token) that has been provided
         * @param callback 
         */
        getRefreshToken(refreshToken: string, callback: o$GetRefreshTokenCallback): void,

        /**
         * The spec does not actually require that you revoke the old token - hence this is
         * optional (Last paragraph: http://tools.ietf.org/html/rfc6749#section-6)
         * @param refreshToken 
         * @param callback 
         */
        revokeRefreshToken(refreshToken: string, callback: o$RevokeRefreshTokenCallback): void
    } & o$BaseModel


    declare type o$ExtensionModel = {

        /**
         * 
         * @param grantType 
         * @param req 
         * @param callback 
         */
        extendedGrant(grantType: string, req: Request, callback: o$ExtendedGrantCallback): void
    } & o$BaseModel


    declare type o$ClientCredentialsModel = {

        /**
         * 
         * @param clientId 
         * @param clientSecret 
         * @param callback 
         */
        getUserFromClient(
            clientId: string,
            clientSecret: string,
            callback: o$GetUserFromClientCallback): void,

        /**
         * 
         * @param type - accessToken or refreshToken
         * @param req - The current express request
         * @param callback 
         */
        generateToken(type: string, req: Request, callback: o$GenerateTokenCallback): void
    } & o$BaseModel


    declare interface o$GenerateTokenCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param token - string indicates success
        null indicates to revert to the default token generator
        object indicates a reissue (i.e. will not be passed to saveAccessToken/saveRefreshToken)
        Must contain the following keys (if object):
        string accessToken OR refreshToken dependant on type
        */
        (error: any, token: string | Object): void
    }

    declare interface o$GetUserFromClientCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param user - The user retrieved from storage or falsey to indicate an invalid user
        Saved in req.user
        */
        (error: any, user: o$User): void
    }

    declare interface o$ExtendedGrantCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param supported - Whether you support the grant type
         * @param user - The user retrieved from storage or falsey to indicate an invalid user
        Saved in req.user
        */
        (error: any, supported: boolean, user: o$User): void
    }

    declare interface o$RevokeRefreshTokenCallback {

        /**
         * Truthy to indicate an error
         * @param error 
         */
        (error: any): void
    }

    declare interface o$GetRefreshTokenCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param refreshToken - The refresh token retrieved form storage or falsey to indicate invalid refresh token
         */
        (error: any, refreshToken: o$RefreshToken): void
    }

    declare interface o$SaveRefreshTokenCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         */
        (error: any): void
    }

    declare interface o$GetUserCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param user - The user retrieved from storage or falsey to indicate an invalid user
        Saved in req.user
        */
        (error: any, user: o$User): void
    }

    declare interface o$SaveAuthCodeCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         */
        (error: any): void
    }

    declare interface o$GetAuthCodeCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param authCode - The authorization code retrieved form storage or falsey to indicate invalid code
         */
        (error: String, authCode: o$AuthCode): void
    }

    declare interface o$SaveAccessTokenCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         */
        (error: any): void
    }

    declare interface o$GetAccessTokenCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param accessToken - The access token retrieved form storage or falsey to indicate invalid access token
         */
        (error: any, accessToken: o$AccessToken): void
    }

    declare interface o$GetClientCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param client - The client retrieved from storage or falsey to indicate an invalid client
        Saved in req.client
        */
        (error: any, client: o$Client): void
    }

    declare interface o$GrantTypeAllowedCallback {

        /**
         * 
         * @param error - Truthy to indicate an error
         * @param allowed - Indicates whether the grantType is allowed for this clientId
         */
        (error: any, allowed: boolean): void
    }

    declare interface o$RefreshToken {

        /**
         * client id associated with this token
         */
        clientId: string,

            /**
             * The date when it expires
             * null to indicate the token never expires
             */
            expires: Date,

            /**
             * 
             */
            userId: string
    }

    declare interface o$AuthCode {

        /**
         * client id associated with this auth code
         */
        clientId: string,

            /**
             * The date when it expires
             */
            expires: Date,

            /**
             * The userId
             */
            userId: string
    }

    declare interface o$User {
        id: string
    }

    declare interface o$Client {
        clientId: string,

            /**
             * authorization_code grant type only
             */
            redirectUri: string
    }

    declare interface o$AccessToken {

        /**
         * The date when it expires
         * null to indicate the token never expires
         */
        expires: Date,

            /**
             * If a user key exists, this is saved as req.user
             */
            user?: o$User,

            /**
             * If a user key exists, this is saved as req.user
             * Otherwise a userId key must exist, which is saved in req.user.id
             */
            userId?: string
    }
}