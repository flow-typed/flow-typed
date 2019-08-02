// @flow
import React from 'react';
import { it, describe } from 'flow-typed-test';

import {
  Accuracy,
  ActivityType,
  GeofencingEventType,
  GeofencingRegionState,
  enableNetworkProviderAsync,
  geocodeAsync,
  getCurrentPositionAsync,
  getHeadingAsync,
  getProviderStatusAsync,
  hasServicesEnabledAsync,
  hasStartedGeofencingAsync,
  hasStartedLocationUpdatesAsync,
  installWebGeolocationPolyfill,
  isBackgroundLocationAvailableAsync,
  requestPermissionsAsync,
  reverseGeocodeAsync,
  setApiKey,
  startGeofencingAsync,
  startLocationUpdatesAsync,
  stopGeofencingAsync,
  stopLocationUpdatesAsync,
  watchHeadingAsync,
  watchPositionAsync,
} from 'expo-location';

describe('Enums', () => {
  it('should include some values', () => {
    const { Balanced } = Accuracy;
    const { Fitness } = ActivityType;
    const { Enter } = GeofencingEventType;
    const { Outside } = GeofencingRegionState;
  });
});

describe('getCurrentPositionAsync', () => {
  it('should passes when used properly', () => {
    getCurrentPositionAsync({
      accuracy: Accuracy.High,
    }).then(result => {
      const { coords, timestamp } = result;

      (timestamp: number);

      (coords.latitude: number);
      (coords.speed: number);

      // $ExpectError: check any
      (coords.speed: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need an object
    getCurrentPositionAsync(11);

    // $ExpectError: `__accuracy` is missing in enum
    getCurrentPositionAsync({ __accuracy: 1 });
  });
});

describe('getHeadingAsync', () => {
  it('should passes when used properly', () => {
    getHeadingAsync().then(result => {
      (result.trueHeading: number);
      (result.magHeading: number);

      // $ExpectError: check any
      (result.magHeading: string);
    });
  });
});

describe('getProviderStatusAsync', () => {
  it('should passes when used properly', () => {
    getProviderStatusAsync().then(result => {
      (result.locationServicesEnabled: boolean);
      (result.backgroundModeEnabled: boolean);
      (result.gpsAvailable: ?boolean);
      (result.networkAvailable: ?boolean);
      (result.passiveAvailable: ?boolean);

      // $ExpectError: check any
      (result.backgroundModeEnabled: string);

      // $ExpectError: `abcd` is missing
      (result.abcd: any);
    });
  });
});

describe('hasStartedGeofencingAsync', () => {
  it('should passes when used properly', () => {
    hasStartedGeofencingAsync('taskName').then(result => {
      (result: boolean);

      // $ExpectError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need a string
    hasStartedGeofencingAsync(69);
  });
});

describe('hasStartedLocationUpdatesAsync', () => {
  it('should passes when used properly', () => {
    hasStartedLocationUpdatesAsync('taskName').then(result => {
      (result: boolean);

      // $ExpectError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need a string
    hasStartedLocationUpdatesAsync(69);
  });
});

describe('setApiKey', () => {
  it('should passes when used properly', () => {
    (setApiKey('apiKey'): void);
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need a string
    setApiKey(69);
  });
});

describe('startGeofencingAsync', () => {
  it('should passes when used properly', () => {
    startGeofencingAsync('taskName', [
      {
        latitude: 14,
        longitude: 48,
        radius: 69,
      },
    ]);

    startGeofencingAsync('taskName', [
      {
        latitude: 14,
        longitude: 48,
        radius: 69,
        identifier: 'id',
        notifyOnEnter: false,
        notifyOnExit: false,
      },
    ]);

    startGeofencingAsync('taskName').then(result => {
      (result: void);

      // $ExpectError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: first argument is required
    startGeofencingAsync();

    // $ExpectError: first argument mush be a string
    startGeofencingAsync(1337);

    startGeofencingAsync('taskName', [
      // $ExpectError: must be a region object
      69,
    ]);

    startGeofencingAsync('taskName', [
      {
        latitude: 14,
        longitude: 48,
        // $ExpectError: must be a number
        radius: '69',
      },
    ]);

    startGeofencingAsync('taskName', [
      // $ExpectError: `abc` prop is missing in Region
      {
        latitude: 14,
        longitude: 48,
        radius: 666,
        abc: 11,
      },
    ]);
  });
});

describe('reverseGeocodeAsync', () => {
  it('should passes when used properly', () => {
    reverseGeocodeAsync({
      latitude: 1,
      longitude: 1,
    }).then(result => {
      const address = result[0];

      (address.city: string);
      (address.street: string);
      (address.region: string);
      (address.country: string);
      (address.postalCode: string);

      // $ExpectError: check any
      (address.name: number);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: first argument is required
    reverseGeocodeAsync();

    // $ExpectError: first must be an object
    reverseGeocodeAsync(123);

    // $ExpectError: object do not include required props `latitude,longitude`
    reverseGeocodeAsync({});

    // $ExpectError: `abc` is extra props
    reverseGeocodeAsync({
      latitude: 1,
      longitude: 1,
      abc: 1,
    });

    reverseGeocodeAsync({
      // $ExpectError: `latitude` must be a number
      latitude: 'nned number',
      longitude: 1,
    });
  });
});

describe('startLocationUpdatesAsync', () => {
  it('should passes when used properly', () => {
    startLocationUpdatesAsync('taskName', {
      accuracy: Accuracy.Balanced,
      activityType: ActivityType.Fitness,
      timeInterval: 1000,
    });

    startLocationUpdatesAsync('taskName', {
      foregroundService: {
        notificationTitle: 'str',
        notificationBody: 'str',
      },
    });

    startLocationUpdatesAsync('taskName', {
      foregroundService: {
        notificationTitle: 'str',
        notificationBody: 'str',
        notificationColor: 'red',
      },
    });

    startLocationUpdatesAsync('taskName').then(result => {
      (result: void);

      // $ExpectError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: first argument is required
    startLocationUpdatesAsync();

    // $ExpectError: first argument mush be a string
    startLocationUpdatesAsync(1337);

    // $ExpectError: second argument must be an object
    startLocationUpdatesAsync('taskName', 69);

    startLocationUpdatesAsync('taskName', {
      // $ExpectError: invalid accuracy
      accuracy: 1,
      // $ExpectError: invalid activityType
      activityType: 1,

      // $ExpectError: `notificationTitle` is required props
      foregroundService: { notificationBody: 'str' },
    });
  });
});

describe('stopGeofencingAsync', () => {
  it('should passes when used properly', () => {
    stopGeofencingAsync('taskName').then(result => {
      (result: void);

      // $ExpectError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need a string
    stopGeofencingAsync(69);
  });
});

describe('stopLocationUpdatesAsync', () => {
  it('should passes when used properly', () => {
    stopLocationUpdatesAsync('taskName').then(result => {
      (result: void);

      // $ExpectError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need a string
    stopLocationUpdatesAsync(69);
  });
});

describe('watchHeadingAsync', () => {
  it('should passes when used properly', () => {
    watchHeadingAsync(data => {
      (data.trueHeading: number);
      (data.magHeading: number);
      (data.accuracy: number);

      // $ExpectError: check any
      (data.accuracy: string);
    });
    watchHeadingAsync(async () => {}).then(result => {
      result.remove();
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: need a function
    watchHeadingAsync(69);
  });
});

describe('watchPositionAsync', () => {
  it('should passes when used properly', () => {
    watchPositionAsync({}, data => {
      const { coords, timestamp } = data;

      (timestamp: number);

      (coords.latitude: number);
      (coords.speed: number);

      // $ExpectError: check any
      (coords.speed: string);
    });
    watchPositionAsync({}, async () => {}).then(result => {
      result.remove();
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $ExpectError: first argument is required
    watchPositionAsync();

    // $ExpectError: first argument must be a n object
    watchPositionAsync(69);

    // $ExpectError: second argument must be a function
    watchPositionAsync({}, 69);

    watchPositionAsync(
      {
        // $ExpectError: invalid accuracy value
        accuracy: 1,
      },
      () => {}
    );
  });
});

it('should passes when used properly', () => {
  (installWebGeolocationPolyfill(): void);

  enableNetworkProviderAsync().then(result => {
    (result: void);

    // $ExpectError: check any
    (result: number);
  });

  requestPermissionsAsync().then(result => {
    (result: void);

    // $ExpectError: check any
    (result: number);
  });

  hasServicesEnabledAsync().then(result => {
    (result: boolean);

    // $ExpectError: check any
    (result: number);
  });

  isBackgroundLocationAvailableAsync().then(result => {
    (result: boolean);

    // $ExpectError: check any
    (result: number);
  });

  geocodeAsync('address').then(result => {
    const geocodedLocation = result[0];

    (geocodedLocation.latitude: number);
    (geocodedLocation.longitude: number);
    (geocodedLocation.altitude: ?number);
    (geocodedLocation.accuracy: ?number);

    // $ExpectError: check any
    (geocodedLocation.latitude: string);
  });
});
