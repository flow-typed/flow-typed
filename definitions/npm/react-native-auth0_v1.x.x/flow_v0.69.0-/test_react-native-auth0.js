// @flow
import { describe, it } from "flow-typed-test";
import Auth0, {
  type Auth,
  type UserInfo,
  type Users,
  type WebAuth
} from "react-native-auth0";

describe("Auth0 constructor", () => {
  it("passes when used properly", () => {
    new Auth0({
      domain: "{YOUR_AUTH0_DOMAIN}",
      clientId: "{YOUR_CLIENT_ID}"
    });
  });

  it("raises an error when create new class without any arguments", () => {
    // $ExpectError - first argument is required
    new Auth0();
  });

  describe("Auth0 properties", () => {
    const auth0 = new Auth0({
      domain: "{YOUR_AUTH0_DOMAIN}",
      clientId: "{YOUR_CLIENT_ID}"
    });

    describe("Auth0::auth", () => {
      it("must return Auth class", () => {
        (auth0.auth: Auth);
      });

      describe("Auth class", () => {
        describe("Auth::authorizationUrl", () => {
          it("passes when used properly", () => {
            const url = auth0.auth.authorizationUrl({
              responseType: "json",
              redirectUri: "http://localhost:3000",
              state: "my-state"
            });

            (url: string);
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.authorizationUrl({
              responseType: {},
              redirectUri: true,
              state: 69
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.authorizationUrl();
          });
        });

        describe("Auth::createUser", () => {
          it("passes when used properly", () => {
            auth0.auth
              .createUser({
                email: "me@example.com",
                username: "johndoe",
                password: "password",
                connection: "db-connection"
              })
              .then(res => {
                (res.Id: string);
                (res.emailVerified: boolean);
                (res.email: string);
              });
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.createUser({
              email: 69
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.createUser();
          });
        });

        describe("Auth::logoutUrl", () => {
          it("passes when used properly", () => {
            const url = auth0.auth.logoutUrl({
              federated: true,
              clientId: "client-id",
              returnTo: "http://localhost:3000"
            });

            (url: string);
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.logoutUrl({
              federated: "true",
              clientId: 123,
              returnTo: {}
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.logoutUrl();
          });
        });

        describe("Auth::passwordRealm", () => {
          it("passes when used properly", () => {
            auth0.auth
              .passwordRealm({
                username: "me@example.com",
                password: "password",
                realm: "realm",
                audience: "user-info"
              })
              .then(res => {
                (res.accessToken: string);
                (res.expiresIn: number);
                (res.idToken: string);
                (res.scope: string);
                (res.tokenType: "Bearer");
                (res.refreshToken: ?string);
              });
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.passwordRealm({
              username: true,
              password: 123
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.passwordRealm();
          });
        });

        describe("Auth::refreshToken", () => {
          it("passes when used properly", () => {
            auth0.auth.refreshToken({
              refreshToken: "refresh-token",
              scope: "openid"
            });
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.refreshToken({
              refreshToken: 1337,
              scope: {}
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.refreshToken();
          });
        });

        describe("Auth::resetPassword", () => {
          it("passes when used properly", () => {
            auth0.auth.resetPassword({
              email: "me@example.com",
              connection: "db-connection"
            });
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.resetPassword({
              email: null,
              connection: 80
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.resetPassword();
          });
        });

        describe("Auth::revoke", () => {
          it("passes when used properly", () => {
            auth0.auth.revoke({
              refreshToken: "refresh-token"
            });
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.revoke({
              refreshToken: 1995
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.revoke();
          });
        });

        describe("Auth::userInfo", () => {
          it("passes when used properly", () => {
            auth0.auth
              .userInfo({
                token: "token"
              })
              .then(userInfo => {
                (userInfo.email: string);
                (userInfo.emailVerified: boolean);
                (userInfo.name: string);
                (userInfo.nickname: string);
                (userInfo.picture: string);
                (userInfo.sub: string);
                (userInfo.updatedAt: string);
              });
          });

          it("raises an error when call with invalid params", () => {
            // $ExpectError
            auth0.auth.userInfo({
              token: 1234
            });
          });

          it("raises an error when call without args", () => {
            // $ExpectError
            auth0.auth.userInfo();
          });
        });
      });
    });

    describe("Auth0::webAuth", () => {
      it("must return WebAuth class", () => {
        (auth0.webAuth: WebAuth);
      });

      describe("WebAuth", () => {
        it("passes when used properly", () => {
          auth0.webAuth.authorize({
            state: "state",
            nonce: "nonce",
            scope: "openid",
            language: "en",
            prompt: "login"
          });

          auth0.webAuth.clearSession({ federated: false });
          auth0.webAuth.clearSession();
        });

        it("raises an error when Param has undeclared props", () => {
          // $ExpectError - property `anyOtherProp` is missing in `ClearSessionParams` <- Exact type
          auth0.webAuth.clearSession({
            federated: false,
            anyOtherProp: ["oops"]
          });
        });
      });
    });

    describe("Auth0::users", () => {
      it('raises an error when call "users()" method without arguments', () => {
        // $ExpectError
        auth0.users();
      });

      it("raises an error when fist argument int's string", () => {
        // $ExpectError
        auth0.users(123);
      });

      it("must return Users class", () => {
        (auth0.users("token"): Users);
      });

      describe("User class", () => {
        const user = auth0.users("token");

        it("passes when used properly", () => {
          user.getUser({ id: "userId" });

          user.patchUser<{ firstName: string, lastName: string }>({
            id: "userId",
            metadata: { firstName: "John", lastName: "Dow" }
          });
        });

        it('raise an error when call "getUser({id})" with undeclared props', () => {
          // $ExpectError - first argument is Exact Type, need only `id` prop
          user.getUser({ id: "userId", anyOtherProp: ["anyData"] });
        });

        it('raise an error when call "getUser({id})" without arguments', () => {
          // $ExpectError - first argument is required
          user.getUser();
        });

        it('raise an error when call "patchUser({id,metadata})" with undeclared props', () => {
          // $ExpectError - first argument is Exact Type, need only `id` and `metadata` properties
          user.patchUser<Object>({
            id: "userId",
            metadata: {},
            anyOtherProp: ["anyData"]
          });
        });

        it('raise an error when call "patchUser({id,metadata})" without arguments', () => {
          // $ExpectError - first argument is required
          user.patchUser();
        });
      });
    });
  });
});
