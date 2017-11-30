// @flow
declare module "react-native-google-analytics-bridge" {
  declare export type Product = {
    id: string,
    name: string,
    category?: string,
    brand?: string,
    variant?: string,
    price?: number,
    quantity?: number,
    couponCode?: string
  };

  declare export type Transaction = {
    id: string,
    affiliation?: string,
    revenue?: number,
    tax?: number,
    shipping?: number,
    couponCode?: string
  };

  declare export type OptionalValue = {
    label: string,
    value: number
  };

  declare export type OptionalTimingValue = {
    name: string,
    label?: string
  };

  declare export type CustomDimensionsFieldIndexMap = {
    [key: string]: number
  };

  declare export type CustomDimensionsByIndex = {
    [key: number]: any
  };

  declare export type CustomDimensionsByField = {
    [key: string]: any
  };

  declare export type CustomMetrics = {
    [key: number]: number
  };

  /**
   * Used to bridge tracker data to native Google analytics.
   * Saves necessary tracker (specific) data to format data as native part of Google analytics expect.
   */
  declare export class GoogleAnalyticsTracker {
    /**
     * Save all tracker related data that is needed to call native methods with proper data.
     * @param {String} trackerId
     * @param {{fieldName: fieldIndex}} customDimensionsFieldsIndexMap Custom dimensions field/index pairs
     */
    constructor(
      trackerId: string,
      customDimensionsFieldsIndexMap?: CustomDimensionsFieldIndexMap
    ): GoogleAnalyticsTracker,

    /**
     * If Tracker has customDimensionsFieldsIndexMap, it will transform
     * customDimensions map pairs {field: value} to {fieldIndex: value}.
     * Otherwise customDimensions are passed trough untouched.
     * Underlay native methods will transform provided customDimensions map to expected format.
     * Google analytics expect dimensions to be tracker with 'dimension{index}' keys,
     * not dimension field names.
     * @param {CustomDimensionsByIndex} customDimensions
     * @returns {CustomDimensionsByField}
     */
    transformCustomDimensionsFieldsToIndexes(
      customDimensions: CustomDimensionsByIndex
    ): CustomDimensionsByField,

    /**
     * Track the current screen/view
     * @param  {String} screenName The name of the current screen
     */
    trackScreenView(screenName: string): void,

    /**
     * Track the campaign from url
     * @param  {String} urlString The url of the deep link
     */
    trackCampaignFromUrl(urlString: string): void,

    /**
     * Track an event that has occured
     * @param  {String} category       The event category
     * @param  {String} action         The event action
     * @param  {OptionalValue} optionalValues An object containing optional label and value
     */
    trackEvent(
      category: string,
      action: string,
      optionalValues?: OptionalValue
    ): void,

    /**
     * Track the current screen/view with custom dimension values
     * @param  {String} screenName The name of the current screen
     * @param  {CustomDimensionsByIndex | CustomDimensionsByField} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackScreenViewWithCustomDimensionValues(
      screenName: string,
      customDimensionValues: CustomDimensionsByIndex | CustomDimensionsByField
    ): void,

    /**
     * Track an event that has occured with custom dimension values
     * @param  {String} category       The event category
     * @param  {String} action         The event action
     * @param  {OptionalValue} optionalValues An object containing optional label and value
     * @param  {CustomDimensionsByIndex | CustomDimensionsByField} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackEventWithCustomDimensionValues(
      category: string,
      action: string,
      optionalValues?: OptionalValue,
      customDimensionValues?: CustomDimensionsByIndex | CustomDimensionsByField
    ): void,
    /**
     * Track an event that has occured with custom dimension and metric values.
     * @param  {String} category       The event category
     * @param  {String} action         The event action
     * @param  {OptionalValue} optionalValues An object containing optional label and value
     * @param  {CustomDimensionsByIndex | CustomDimensionsByField} customDimensionValues An object containing custom dimension key/value pairs
     * @param  {CustomMetrics} customMetricValues An object containing custom metric key/value pairs
     */
    trackEventWithCustomDimensionAndMetricValues(
      category: string,
      action: string,
      optionalValues?: OptionalValue,
      customDimensionValues?: CustomDimensionsByIndex | CustomDimensionsByField,
      customMetricValues?: CustomMetrics
    ): void,

    /**
     * Track an event that has occured
     * @param  {String} category       The event category
     * @param  {Number} value         	The timing measurement in milliseconds
     * @param  {OptionalTimingValue} optionalValues An object containing optional name and label
     */
    trackTiming(
      category: string,
      value: number,
      optionalValues: OptionalTimingValue
    ): void,

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  {Product} product       An object with product values
     * @param  {Transaction} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     */
    trackPurchaseEvent(
      product: Product,
      transaction: Transaction,
      eventCategory?: string,
      eventAction?: string
    ): void,

    /**
     * Track a purchase event. This uses the Enhanced Ecommerce GA feature.
     * @param  {Product[]} products       An array with products
     * @param  {Transaction} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     */
    trackMultiProductsPurchaseEvent(
      products: Product[],
      transaction: Transaction,
      eventCategory?: string,
      eventAction?: string
    ): void,

    /**
     * Track a purchase event with custom dimensions. This uses the Enhanced Ecommerce GA feature.
     * @param  {Product[]} products       An array with products
     * @param  {Transaction} transaction   An object with transaction values
     * @param  {String} eventCategory The event category, defaults to Ecommerce
     * @param  {String} eventAction   The event action, defaults to Purchase
     * @param  {CustomDimensionsByIndex | CustomDimensionsByField} customDimensionValues An object containing custom dimension key/value pairs
     */
    trackMultiProductsPurchaseEventWithCustomDimensionValues(
      products: Product[],
      transaction: Transaction,
      eventCategory?: string,
      eventAction?: string,
      customDimensions?: CustomDimensionsByIndex | CustomDimensionsByField
    ): void,

    /**
     * Track an exception
     * @param  {String} error The description of the error
     * @param  {Boolean} fatal A value indiciating if the error was fatal, defaults to false
     */
    trackException(error: string, fatal?: boolean): void,

    /**
     * Sets the current userId for tracking.
     * @param {String} userId The current userId
     */
    setUser(userId: string): void,

    /**
     * Sets the current clientId for tracking.
     * @param {String} clientId The current userId
     */
    setClient(clientId: string): void,

    /**
     * Sets if IDFA (identifier for advertisers) collection should be enabled
     * @param  {Boolean} enabled Defaults to true
     */
    allowIDFA(enabled: boolean): void,

    /**
     * Track a social interaction, Facebook, Twitter, etc.
     * @param  {String} network
     * @param  {String} action
     * @param  {String} targetUrl
     */
    trackSocialInteraction(
      network: string,
      action: string,
      targetUrl?: string
    ): void,

    /**
     * Sets if uncaught exceptions should be tracked
     * @param {Boolean} enabled
     */
    setTrackUncaughtExceptions(enabled: boolean): void,

    /**
     * Sets the trackers appName
     * The Bundle name is used by default
     * @param {String} appName
     */
    setAppName(appName: string): void,

    /**
     * Sets the trackers appVersion
     * @param {String} appVersion
     */
    setAppVersion(appVersion: string): void,

    /**
     * Sets if AnonymizeIp is enabled
     * If enabled the last octet of the IP address will be removed
     * @param {Boolean} enabled
     */
    setAnonymizeIp(enabled: boolean): void,
    /**
     * Sets tracker sampling rate.
     * @param {Float} sampleRatio Percentage 0 - 100
     */
    setSamplingRate(sampleRatio: number): void,

    /**
     * Sets the currency for tracking.
     * @param {String} currencyCode The currency ISO 4217 code
     */
    setCurrency(currencyCode: string): void,

    /**
     * This function lets you create a session manually. By default, Google Analytics will group hits that are received
     * within 30 minutes of one another into the same session. So it is strictly not necessary to create a session manually.
     * @param {String} screenName The current screen which the session started on
     */
    createNewSession(screenName: string): void
  }

  /**
   * Google analytics settings shared across all GoogleAnalyticsTracker instances.
   */
  declare export class GoogleAnalyticsSettings {
    /**
     * Sets if OptOut is active and disables Google Analytics
     * This has to be set each time the App starts
     * @param {Boolean} enabled
     */
    static setOptOut(enabled: boolean): void,

    /**
     * Sets the trackers dispatch interval
     * This will influence how often batches of events, screen views, etc
     * are sent to your tracker.
     * @param {Number} intervalInSeconds
     */
    static setDispatchInterval(intervalInSeconds: number): void,

    /**
     * Sets if the tracker should have dry run enabled.
     * If dry run is enabled, no analytics data will be sent to your tracker.
     * @param {Boolean} enabled
     */
    static setDryRun(enabled: boolean): void
  }

  declare export type DataLayerEvent = {
    event: string,
    [key: string]: any
  };

  declare export class GoogleTagManager {
    /**
     * Call once to open the container for all subsequent static calls.
     * @param {String} containerId
     * @returns {Promise<boolean>}
     */
    static openContainerWithId(containerId: string): Promise<boolean>,

    /**
     * Retrieves a boolean value with the given key from the opened container.
     * @param {String} key
     * @returns {Promise<boolean>}
     */
    static boolForKey(key: string): Promise<boolean>,

    /**
     * Retrieves a string with the given key from the opened container.
     * @param {String} key
     * @returns {String}
     */
    static stringForKey(key: string): Promise<string>,

    /**
     * Retrieves a number with the given key from the opened container.
     * @param {String} key
     * @returns {Promise<number>}
     */
    static doubleForKey(key: string): Promise<number>,

    /**
     * Push a datalayer event for Google Analytics through Google Tag Manager. The event must have at least one key "event" with event name.
     * You can add optional values on top of that, example: {event: "eventName", pageId: "/home"}
     * @param {Object} event An Map<String, Object> containing key and value pairs. It must have at least one key "event" with event name
     * @returns {Promise<boolean>}
     */
    static pushDataLayerEvent(event: DataLayerEvent): Promise<boolean>
  }
}
