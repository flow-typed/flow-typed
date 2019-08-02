// @flow

declare module 'amplitude-js' {
  declare type SimplePropertyValue = string | number;
  declare type PropertyValue = SimplePropertyValue | $ReadOnlyArray<SimplePropertyValue>;
  declare type PropertyObject = { +[name: string]: PropertyValue };
  declare type CompoundPropertyValue = PropertyValue | PropertyObject;
  declare type EventCallback = (responseCode: number, responseBody: string) => mixed;
  declare type GroupsMap = { +[name: string]: string | $ReadOnlyArray<string> };

  declare type AmplitudeConfig = {
    +batchEvents?: boolean,
    +cookieExpiration?: number,
    +cookieName?: string,
    +deviceId?: string,
    +deviceIdFromUrlParam?: boolean,
    +domain?: string,
    +eventUploadPeriodMillis?: number,
    +eventUploadThreshold?: number,
    +forceHttps?: boolean,
    +includeGclid?: boolean,
    +includeReferrer?: boolean,
    +includeUtm?: boolean,
    +language?: string,
    +logLevel?: string,
    +optOut?: boolean,
    +platform?: string,
    +saveEvents?: boolean,
    +savedMaxCount?: number,
    +saveParamsReferrerOncePerSession?: boolean,
    +sessionTimeout?: number,
    +uploadBatchSize?: number,
  };

  /**
   * Identify API. Identify objects are a wrapper for user property operations.
   * Each method adds a user property operation to the Identify object, and returns the same Identify object,
   * allowing you to chain multiple method calls together.
   * Note: if the same user property is used in multiple operations on a single Identify object,
   * only the first operation on that property will be saved, and the rest will be ignored.
   * See [Readme]{@link https://github.com/amplitude/Amplitude-Javascript#user-properties-and-user-property-operations}
   * for more information on the Identify API and user property operations.
   */
  declare export class Identify {
    /**
     * @public
     * @constructor
     */
    constructor(): Identify;

    /**
     * Increment a user property by a given value (can also be negative to decrement).
     * If the user property does not have a value set yet, it will be initialized to 0 before being incremented.
     * @public
     * @param {string} property The user property key.
     * @param {number} value The amount by which to increment the user property.
     * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
     */
    add(property: string, value: number): Identify;

    /**
     * Append a value or values to a user property.
     * If the user property does not have a value set yet,
     * it will be initialized to an empty list before the new values are appended.
     * If the user property has an existing value and it is not a list,
     * the existing value will be converted into a list with the new values appended.
     * @public
     * @param {string} property The user property key.
     * @param {number|string|list} value A value or values to append.
     * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
     */
    append(property: string, value: PropertyValue): Identify;

    /**
     * Prepend a value or values to a user property.
     * If the user property does not have a value set yet,
     * it will be initialized to an empty list before the new values are prepended.
     * If the user property has an existing value and it is not a list,
     * the existing value will be converted into a list with the new values prepended.
     * @public
     * @param {string} property The user property key.
     * @param {number|string|list} value A value or values to append.
     * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
     */
    prepend(property: string, value: PropertyValue): Identify;

    /**
     * Sets the value of a given user property. If a value already exists, it will be overwriten with the new value.
     * @public
     * @param {string} property The user property key.
     * @param {number|string|list|object} value A value or values to append.
     * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
     */
    set(property: string, value: CompoundPropertyValue): Identify;

    /**
     * Sets the value of a given user property only once. Subsequent setOnce operations on that user property will be ignored;
     * however, that user property can still be modified through any of the other operations.
     * Useful for capturing properties such as 'initial_signup_date', 'initial_referrer', etc.
     * @public
     * @param {string} property The user property key.
     * @param {number|string|list|object} value A value or values to append.
     * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
     */
    setOnce(property: string, value: CompoundPropertyValue): Identify;

    /**
     * Unset and remove a user property. This user property will no longer show up in a user's profile.
     * @public
     * @param {string} property The user property key.
     * @return {Identify} Returns the same Identify object, allowing you to chain multiple method calls together.
     */
    unset(property: string): Identify;
  }

  /**
   * Revenue API. Revenue objects are a wrapper for revenue data.
   * Each method updates a revenue property in the Revenue object, and returns the same Revenue object,
   * allowing you to chain multiple method calls together.
   * Note: price is a required field to log revenue events.
   * If quantity is not specified then defaults to 1.
   * See [Readme]{@link https://github.com/amplitude/Amplitude-Javascript#tracking-revenue} for more information
   * about logging Revenue.
   */
  declare export class Revenue {
    /**
     * @public
     * @constructor
     */
    constructor(): Revenue;

    /**
     * Set a value for the product identifer.
     * @public
     * @param {string} productId The value for the product identifier. Empty and invalid strings are ignored.
     * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
     */
    setProductId(productId: string): Revenue;

    /**
     * Set a value for the quantity. Note revenue amount is calculated as price * quantity.
     * @public
     * @param {number} quantity Integer value for the quantity. If not set, quantity defaults to 1.
     * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
     */
    setQuantity(quantity?: number): Revenue;

    /**
     * Set a value for the price. This field is required for all revenue being logged.
     * Note revenue amount is calculated as price * quantity.
     * @public
     * @param {number} price Double value for the quantity.
     * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
     */
    setPrice(price: number): Revenue;

    /**
     * Set a value for the revenueType (for example purchase, cost, tax, refund, etc).
     * @public
     * @param {string} revenueType RevenueType to designate.
     * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
     */
    setRevenueType(revenueType: string): Revenue;

    /**
     * Set event properties for the revenue event.
     * @public
     * @param {object} eventProperties Revenue event properties to set.
     * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
     */
    setEventProperties(eventProperties: PropertyObject): Revenue;
  }

  /**
   * AmplitudeClient SDK API.
   * The Amplitude class handles creation of client instances, all you need to do is call `amplitude.getInstance()`.
   */
  declare export interface AmplitudeClient {
    +Identify: typeof Identify;
    +Revenue: typeof Revenue;

    /**
     * Initializes the Amplitude Javascript SDK with your apiKey and any optional configurations.
     * This is required before any other methods can be called.
     * @public
     * @param {string} apiKey The API key for your app.
     * @param {string} userId (optional) An identifier for this user.
     * @param {object} config (optional) Configuration options.
     * See [Readme]{@link https://github.com/amplitude/Amplitude-Javascript#configuration-options} for list of options and default values.
     * @param {function} callback (optional) Provide a callback function to run after initialization is complete.
     */
    init(apiKey: string, userId?: string | null, config?: AmplitudeConfig | null, callback?: (client: AmplitudeClient) => mixed): void;

    /**
     * Returns true if a new session was created during initialization, otherwise false.
     * @public
     * @return {boolean} Whether a new session was created during initialization.
     */
    isNewSession(): boolean;

    /**
     * Returns the id of the current session.
     * @public
     * @return {number} Id of the current session.
     */
    getSessionId(): number;

    /**
     * Sets a customer domain for the amplitude cookie. Useful if you want to support cross-subdomain tracking.
     * @public
     * @param {string} domain The domain to set.
     */
    setDomain(domain: string): void;

    /**
     * Sets an identifier for the current user.
     * @public
     * @param {string} userId Identifier to set. Can be null.
     */
    setUserId(userId: string | null): void;

    /**
     * Add user to a group or groups. You need to specify a groupType and groupName(s).
     * For example you can group people by their organization.
     * In that case groupType is "orgId" and groupName would be the actual ID(s).
     * groupName can be a string or an array of strings to indicate a user in multiple gruups.
     * You can also call setGroup multiple times with different groupTypes to track multiple types of groups (up to 5 per app).
     * Note: this will also set groupType: groupName as a user property.
     * See the [SDK Readme]{@link https://github.com/amplitude/Amplitude-Javascript#setting-groups} for more information.
     * @public
     * @param {string} groupType The group type (ex: orgId).
     * @param {string|list} groupName The name of the group (ex: 15), or a list of names of the groups.
     */
    setGroup(groupType: string, groupName: string | $ReadOnlyArray<string>): void;

    /**
     * Sets whether to opt current user out of tracking.
     * @public
     * @param {boolean} enable If true then no events will be logged or sent.
     */
    setOptOut(enable: boolean): void;

    /**
     * Regenerates a new random deviceId for current user. Note: this is not recommended unless you know what you
     * are doing. This can be used in conjunction with `setUserId(null)` to anonymize users after they log out.
     * With a null userId and a completely new deviceId, the current user would appear as a brand new user in dashboard.
     * This uses src/uuid.js to regenerate the deviceId.
     * @public
     */
    regenerateDeviceId(): void;

    /**
     * Sets a custom deviceId for current user. Note: this is not recommended unless you know what you are doing
     * (like if you have your own system for managing deviceIds). Make sure the deviceId you set is sufficiently unique
     * (we recommend something like a UUID - see src/uuid.js for an example of how to generate) to prevent conflicts with other devices in our system.
     * @public
     * @param {string} deviceId Custom deviceId for current user.
     */
    setDeviceId(deviceId: string): void;

    /**
     * Sets user properties for the current user.
     * @public
     * @param {object} userProperties Object with string keys and values for the user properties to set.
     */
    setUserProperties(userProperties: PropertyObject): void;

    /**
     * Clear all of the user properties for the current user. Note: clearing user properties is irreversible!
     * @public
     */
    clearUserProperties(): void;

    /**
     * Send an identify call containing user property operations to Amplitude servers.
     * See [Readme]{@link https://github.com/amplitude/Amplitude-Javascript#user-properties-and-user-property-operations}
     * for more information on the Identify API and user property operations.
     * @param {Identify} identify The Identify object containing the user property operations to send.
     * @param {function} callback (optional) Callback function to run when the identify event has been sent.
     */
    identify(identify: Identify, callback?: EventCallback): void;

    /**
     * Set a versionName for your application.
     * @public
     * @param {string} versionName The version to set for your application.
     */
    setVersionName(versionName: string): void;

    /**
     * Log an event with eventType and eventProperties.
     * @public
     * @param {string} eventType The name of the event.
     * @param {object} eventProperties (optional) An object with string keys and values for the event properties.
     * @param {function} callback (optional) A callback function to run after the event is logged.
     */
    logEvent(eventType: string, eventProperties?: PropertyObject | null, callback?: EventCallback): void;

    /**
     * Log an event with eventType and eventProperties and a custom timestamp.
     * @public
     * @param {string} eventType The name of the event.
     * @param {object} eventProperties (optional) An object with string keys and values for the event properties.
     * @param {number} timestamp (optional) The custom timestamp as milliseconds since epoch.
     * @param {function} callback (optional) A callback function to run after the event is logged.
     */
    logEventWithTimestamp(eventType: string, eventProperties?: PropertyObject | null, timestamp?: number | null, callback?: EventCallback): void;

    /**
     * Log an event with eventType, eventProperties, and groups. Use this to set event-level groups.
     * Note: the group(s) set only apply for the specific event type being logged and does not persist on the user
     * (unless you explicitly set it with setGroup).
     * See the [SDK Readme]{@link https://github.com/amplitude/Amplitude-Javascript#setting-groups} for more information
     * about groups and Count by Distinct on the Amplitude platform.
     * @public
     * @param {string} eventType The name of the event.
     * @param {object} eventProperties (optional) An object with string keys and values for the event properties.
     * @param {object} groups (optional) An object with string groupType: groupName values for the event being logged.
     * @param {function} callback (optional) A callback function to run after the event is logged.
     */
    logEventWithGroups(eventType: string, eventProperties?: PropertyObject | null, groups?: GroupsMap | null, callback?: EventCallback): void;

    /**
     * Log revenue with Revenue interface. The new revenue interface allows for more revenue fields like
     * revenueType and event properties.
     * See [Readme]{@link https://github.com/amplitude/Amplitude-Javascript#tracking-revenue}
     * for more information on the Revenue interface and logging revenue.
     * @public
     * @param {Revenue} revenue The revenue object containing the revenue data being logged.
     */
    logRevenueV2(revenue: Revenue): void;
  }

  /**
   * Amplitude SDK API - instance manager.
   */
  declare class Amplitude {
    /**
     * @public
     * @constructor
     */
    constructor(): Amplitude;

    +Identify: typeof Identify;
    +Revenue: typeof Revenue;

    getInstance(name?: string): AmplitudeClient;
  }

  declare export function getInstance(name?: string): AmplitudeClient;
  declare export default Amplitude;
}
