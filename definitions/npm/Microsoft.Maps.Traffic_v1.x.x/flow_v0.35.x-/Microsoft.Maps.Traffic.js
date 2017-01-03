// @flow
/**
 * Flowtype definitions for Microsoft.Maps.Traffic
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'Maps' {
    declare module 'Traffic' {
        declare         export class TrafficManager {
            constructor(map: Map): this;
            hide(): void;
            hideFlow(): void;
            hideIncidents(): void;
            hideLegend(): void;
            show(): void;
            showFlow(): void;
            showIncidents(): void;
            showLegend(): void
        }
    }

}