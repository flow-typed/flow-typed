// @flow
/**
 * Flowtype definitions for angular-mocks-1.3
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'angular-mocks/ngMock' {
    declare     var _: string;
    declare module.exports: typeof _
}
declare module 'angular-mocks/ngMockE2E' {
    declare     var _: string;
    declare module.exports: typeof _
}
declare module 'angular-mocks/ngAnimateMock' {
    declare     var _: string;
    declare module.exports: typeof _
}
declare module 'angular' {
    declare interface IAngularStatic {
        mock: IMockStatic
    }
    declare interface IInjectStatic {
        (...fns: Function[]): any,
        (...inlineAnnotatedConstructor: any[]): any,
        strictDi(val?: boolean): void
    }
    declare interface IMockStatic {
        dump(obj: any): string,
            inject: IInjectStatic,
            module(...modules: any[]): any,
            TzDate(offset: number, timestamp: number): Date,
            TzDate(offset: number, timestamp: string): Date
    }
    declare type IExceptionHandlerProvider = {
        mode(mode: string): void
    } & IServiceProvider

    declare interface ITimeoutService {
        flush(delay?: number): void,
            flushNext(expectedDelay?: number): void,
            verifyNoPendingTasks(): void
    }
    declare interface IIntervalService {
        flush(millis?: number): number
    }
    declare interface ILogService {
        assertEmpty(): void,
            reset(): void
    }
    declare interface ILogCall {
        logs: string[]
    }
    declare interface IHttpBackendService {

        /**
         * Flushes all pending requests using the trained responses.
         * @param count Number of responses to flush (in the order they arrived). If undefined, all pending requests will be flushed. 
         */
        flush(count?: number): void,

            /**
             * Resets all request expectations, but preserves all backend definitions.
             */
            resetExpectations(): void,

            /**
             * Verifies that all of the requests defined via the expect api were made. If any of the requests were not made, verifyNoOutstandingExpectation throws an exception.
             */
            verifyNoOutstandingExpectation(): void,

            /**
             * Verifies that there are no outstanding requests that need to be flushed.
             */
            verifyNoOutstandingRequest(): void,

            /**
             * Creates a new request expectation. 
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param method HTTP method.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
            */
            expect(
                method: string,
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new request expectation for DELETE requests.
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url is as expected.
             * @param headers HTTP headers object to be compared with the HTTP headers in the request.
            */
            expectDELETE(
                url: string | RegExp | ((url: string) => boolean),
                headers?: Object): mock.IRequestHandler,

            /**
             * Creates a new request expectation for GET requests.
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param headers HTTP headers object to be compared with the HTTP headers in the request.
            */
            expectGET(
                url: string | RegExp | ((url: string) => boolean),
                headers?: Object): mock.IRequestHandler,

            /**
             * Creates a new request expectation for HEAD requests.
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param headers HTTP headers object to be compared with the HTTP headers in the request.
            */
            expectHEAD(
                url: string | RegExp | ((url: string) => boolean),
                headers?: Object): mock.IRequestHandler,

            /**
             * Creates a new request expectation for JSONP requests.
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
            */
            expectJSONP(url: string | RegExp | ((url: string) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new request expectation for PATCH requests. 
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
            */
            expectPATCH(
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object): mock.IRequestHandler,

            /**
             * Creates a new request expectation for POST requests. 
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
            */
            expectPOST(
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object): mock.IRequestHandler,

            /**
             * Creates a new request expectation for PUT requests. 
             * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
            Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
            */
            expectPUT(
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object): mock.IRequestHandler,

            /**
             * Creates a new backend definition. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param method HTTP method.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            when(
                method: string,
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for DELETE requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenDELETE(
                url: string | RegExp | ((url: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for GET requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenGET(
                url: string | RegExp | ((url: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for HEAD requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenHEAD(
                url: string | RegExp | ((url: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for JSONP requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenJSONP(url: string | RegExp | ((url: string) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for PATCH requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenPATCH(
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for POST requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenPOST(
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler,

            /**
             * Creates a new backend definition for PUT requests. 
             * Returns an object with respond method that controls how a matched request is handled.
             * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
             * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
             * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
             */
            whenPUT(
                url: string | RegExp | ((url: string) => boolean),
                data?: string | RegExp | Object | ((data: string) => boolean),
                headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler
    }
    declare module 'mock' {
        declare interface IRequestHandler {

            /**
             * Controls the response for a matched request using a function to construct the response. 
             * Returns the RequestHandler object for possible overrides.
             * @param func Function that receives the request HTTP method, url, data, and headers and returns an array containing response status (number), data, headers, and status text.
             */
            respond(
                    func: ((
                        method: string,
                        url: string,
                        data: string | Object,
                        headers: Object) => [number, string | Object, Object, string])): IRequestHandler,

                /**
                 * Controls the response for a matched request using supplied static data to construct the response. 
                 * Returns the RequestHandler object for possible overrides.
                 * @param status HTTP status code to add to the response.
                 * @param data Data to add to the response.
                 * @param headers Headers object to add to the response.
                 * @param responseText Response text to add to the response.
                 */
                respond(
                    status: number,
                    data: string | Object,
                    headers?: Object,
                    responseText?: string): IRequestHandler,

                /**
                 * Controls the response for a matched request using the HTTP status code 200 and supplied static data to construct the response. 
                 * Returns the RequestHandler object for possible overrides.
                 * @param data Data to add to the response.
                 * @param headers Headers object to add to the response.
                 * @param responseText Response text to add to the response.
                 */
                respond(
                    data: string | Object,
                    headers?: Object,
                    responseText?: string): IRequestHandler,

                /**
                 * Any request matching a backend definition or expectation with passThrough handler will be passed through to the real backend (an XHR request will be made to the server.)
                 */
                passThrough(): IRequestHandler
        }
    }

}
declare var inject: angular.IInjectStatic;