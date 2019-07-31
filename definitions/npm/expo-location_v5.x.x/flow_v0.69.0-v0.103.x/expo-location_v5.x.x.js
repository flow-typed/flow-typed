declare module 'expo-location' {
  declare export type ProviderStatus = {|
    locationServicesEnabled: boolean,
    backgroundModeEnabled: boolean,
    gpsAvailable?: boolean,
    networkAvailable?: boolean,
    passiveAvailable?: boolean,
  |};

  declare export type LocationOptions = {|
    accuracy?: $Values<typeof Accuracy>,
    enableHighAccuracy?: boolean,
    timeInterval?: number,
    distanceInterval?: number,
    timeout?: number,
    mayShowUserSettingsDialog?: boolean,
  |};

  declare export type LocationData = {|
    coords: {|
      latitude: number,
      longitude: number,
      altitude: number,
      accuracy: number,
      heading: number,
      speed: number,

      // iOS Only
      altitudeAccuracy?: number,
    |},
    timestamp: number,
  |};

  declare export type HeadingData = {|
    trueHeading: number,
    magHeading: number,
    accuracy: number,
  |};

  declare export type GeocodedLocation = {|
    latitude: number,
    longitude: number,
    altitude?: number,
    accuracy?: number,
  |};

  declare export type Address = {|
    city: string,
    street: string,
    region: string,
    country: string,
    postalCode: string,
    name: string,
  |};

  declare type LocationTaskOptions = {|
    accuracy?: $Values<typeof Accuracy>,
    timeInterval?: number,
    distanceInterval?: number,
    showsBackgroundLocationIndicator?: boolean,
    deferredUpdatesDistance?: number,
    deferredUpdatesTimeout?: number,
    deferredUpdatesInterval?: number,
    activityType?: $Values<typeof ActivityType>,
    pausesUpdatesAutomatically?: boolean,
    foregroundService?: {|
      notificationTitle: string,
      notificationBody: string,
      notificationColor?: string,
    |},
  |};

  declare type Region = {|
    identifier?: string,
    latitude: number,
    longitude: number,
    radius: number,
    notifyOnEnter?: boolean,
    notifyOnExit?: boolean,
  |};

  declare type LocationCallback = (data: LocationData) => mixed;

  declare type HeadingCallback = (data: HeadingData) => mixed;

  declare export opaque type Accuracy$Lowest: 1;
  declare export opaque type Accuracy$Low: 2;
  declare export opaque type Accuracy$Balanced: 3;
  declare export opaque type Accuracy$High: 4;
  declare export opaque type Accuracy$Highest: 5;
  declare export opaque type Accuracy$BestForNavigation: 6;

  // https://docs.expo.io/versions/latest/sdk/location/#locationaccuracy
  declare export var Accuracy: {|
    Lowest: Accuracy$Lowest,
    Low: Accuracy$Low,
    Balanced: Accuracy$Balanced,
    High: Accuracy$High,
    Highest: Accuracy$Highest,
    BestForNavigation: Accuracy$BestForNavigation,
  |};

  declare export opaque type ActivityType$Other: 1;
  declare export opaque type ActivityType$AutomotiveNavigation: 2;
  declare export opaque type ActivityType$Fitness: 3;
  declare export opaque type ActivityType$OtherNavigation: 4;
  declare export opaque type ActivityType$Airborne: 5;

  // https://docs.expo.io/versions/latest/sdk/location/#locationactivitytype
  declare export var ActivityType: {|
    Other: ActivityType$Other,
    AutomotiveNavigation: ActivityType$AutomotiveNavigation,
    Fitness: ActivityType$Fitness,
    OtherNavigation: ActivityType$OtherNavigation,
    Airborne: ActivityType$Airborne,
  |};

  declare export opaque type GeofencingEventType$Enter: 1;
  declare export opaque type GeofencingEventType$Exit: 2;

  // https://docs.expo.io/versions/latest/sdk/location/#locationgeofencingeventtype
  declare export var GeofencingEventType: {|
    Enter: GeofencingEventType$Enter,
    Exit: GeofencingEventType$Exit,
  |};

  declare export opaque type GeofencingRegionState$Inside: 1;
  declare export opaque type GeofencingRegionState$Outside: 2;

  // https://docs.expo.io/versions/latest/sdk/location/#locationgeofencingregionstate
  declare export var GeofencingRegionState: {|
    Inside: GeofencingRegionState$Inside,
    Outside: GeofencingRegionState$Outside,
  |};

  declare export function getProviderStatusAsync(): Promise<ProviderStatus>;

  declare export function enableNetworkProviderAsync(): Promise<void>;

  declare export function getCurrentPositionAsync(
    options?: LocationOptions
  ): Promise<LocationData>;

  declare export function getHeadingAsync(): Promise<HeadingData>;

  declare export function watchHeadingAsync(
    callback: HeadingCallback
  ): Promise<{|
    remove(): void,
  |}>;

  declare export function geocodeAsync(
    address: string
  ): Promise<Array<GeocodedLocation>>;

  declare export function reverseGeocodeAsync(location: {|
    latitude: number,
    longitude: number,
  |}): Promise<Array<Address>>;

  declare export function setApiKey(apiKey: string): void;

  declare export function watchPositionAsync(
    options: LocationOptions,
    callback: LocationCallback
  ): Promise<{|
    remove(): void,
  |}>;

  declare export function requestPermissionsAsync(): Promise<void>;

  declare export function hasServicesEnabledAsync(): Promise<boolean>;

  declare export function isBackgroundLocationAvailableAsync(): Promise<boolean>;

  declare export function startLocationUpdatesAsync(
    taskName: string,
    options?: LocationTaskOptions
  ): Promise<void>;

  declare export function stopLocationUpdatesAsync(
    taskName: string
  ): Promise<void>;

  declare export function hasStartedLocationUpdatesAsync(
    taskName: string
  ): Promise<boolean>;

  declare export function startGeofencingAsync(
    taskName: string,
    regions?: Array<Region>
  ): Promise<void>;

  declare export function stopGeofencingAsync(taskName: string): Promise<void>;

  declare export function hasStartedGeofencingAsync(
    taskName: string
  ): Promise<boolean>;

  declare export function installWebGeolocationPolyfill(): void;
}
