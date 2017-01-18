/**
 * Flowtype definitions for angular-route
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'angular-route' {
    declare var _: string;
    declare module.exports: typeof _
}
declare module 'route' {
    declare interface IRouteParamsService {
        [key: string]: any
    }
    declare interface IRouteService {
        reload(): void,
            routes: any,
            current?: ICurrentRoute,

            /**
             * Causes $route service to update the current URL, replacing current route parameters with those specified in newParams.
             * Provided property names that match the route's path segment definitions will be interpolated into the
            location's path, while remaining properties will be treated as query params.
             * @param newParams Object.<string, string> mapping of URL parameter names to values
            */
            updateParams(newParams: {
                [key: string]: string
            }): void
    }
    declare type InlineAnnotatedFunction = Function | Array<string | Function>;

    /**
     * see http://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when for API documentation
     */
    declare interface IRoute {

        /**
         * {(string|function()=}
         * Controller fn that should be associated with newly created scope or the name of a registered controller if passed as a string.
         */
        controller?: string | InlineAnnotatedFunction,

            /**
             * A controller alias name. If present the controller will be published to scope under the controllerAs name.
             */
            controllerAs?: string,

            /**
             * Undocumented?
             */
            name?: string,

            /**
             * {string=|function()=}
             * Html template as a string or a function that returns an html template as a string which should be used by ngView or ngInclude directives. This property takes precedence over templateUrl.

            If template is a function, it will be called with the following parameters:

            {Array.<Object>} - route parameters extracted from the current $location.path() by applying the current route
            */
            template?: string | {
                ($routeParams?: undefined.IRouteParamsService): string
            },

            /**
             * {string=|function()=}
             * Path or function that returns a path to an html template that should be used by ngView.

            If templateUrl is a function, it will be called with the following parameters:

            {Array.<Object>} - route parameters extracted from the current $location.path() by applying the current route
            */
            templateUrl?: string | {
                ($routeParams?: undefined.IRouteParamsService): string
            },

            /**
             * {Object.<string, function>=} - An optional map of dependencies which should be injected into the controller. If any of these dependencies are promises, the router will wait for them all to be resolved or one to be rejected before the controller is instantiated. If all the promises are resolved successfully, the values of the resolved promises are injected and $routeChangeSuccess event is fired. If any of the promises are rejected the $routeChangeError event is fired. The map object is:
             * 
            - key - {string}: a name of a dependency to be injected into the controller.
            - factory - {string|function}: If string then it is an alias for a service. Otherwise if function, then it is injected and the return value is treated as the dependency. If the result is a promise, it is resolved before its value is injected into the controller. Be aware that ngRoute.$routeParams will still refer to the previous route within these resolve functions. Use $route.current.params to access the new route parameters, instead.
            */
            resolve?: {
                [key: string]: any
            },

            /**
             * {(string|function())=}
             * Value to update $location path with and trigger route redirection.

            If redirectTo is a function, it will be called with the following parameters:

            - {Object.<string>} - route parameters extracted from the current $location.path() by applying the current route templateUrl.
            - {string} - current $location.path()
            - {Object} - current $location.search()
            - The custom redirectTo function is expected to return a string which will be used to update $location.path() and $location.search().
            */
            redirectTo?: string | {
                ($routeParams?: undefined.IRouteParamsService, $locationPath?: string, $locationSearch?: any): string
            },

            /**
             * Reload route when only $location.search() or $location.hash() changes.
             * 
            This option defaults to true. If the option is set to false and url in the browser changes, then $routeUpdate event is broadcasted on the root scope.
            */
            reloadOnSearch?: boolean,

            /**
             * Match routes without being case sensitive
             * 
            This option defaults to false. If the option is set to true, then the particular route can be matched without being case sensitive
            */
            caseInsensitiveMatch?: boolean
    }
    declare type ICurrentRoute = {
        locals: {
            [index: string]: any,
            $scope: IScope,
            $template: string
        },
        params: any
    } & IRoute

    declare type IRouteProvider = {

        /**
         * Match routes without being case sensitive
         * 
        This option defaults to false. If the option is set to true, then the particular route can be matched without being case sensitive
        */
        caseInsensitiveMatch?: boolean,

        /**
         * Sets route definition that will be used on route change when no other route definition is matched.
         * @params  Mapping information to be assigned to $route.current.
         */
        otherwise(params: IRoute): IRouteProvider,

        /**
         * Adds a new route definition to the $route service.
         * @param path Route path (matched against $location.path). If $location.path contains redundant trailing slash or is missing one, the route will still match and the $location.path will be updated to add or drop the trailing slash to exactly match the route definition.

        - path can contain named groups starting with a colon: e.g. :name. All characters up to the next slash are matched and stored in $routeParams under the given name when the route matches.
        - path can contain named groups starting with a colon and ending with a star: e.g.:name*. All characters are eagerly stored in $routeParams under the given name when the route matches.
        - path can contain optional named groups with a question mark: e.g.:name?.

        For example, routes like /color/:color/largecode/:largecode*\/edit will match /color/brown/largecode/code/with/slashes/edit and extract: color: brown and largecode: code/with/slashes.
         * @param route Mapping information to be assigned to $route.current on route match.
        */
        when(path: string, route: IRoute): IRouteProvider
    } & IServiceProvider

}