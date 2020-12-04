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

      // $FlowExpectedError: check any
      (coords.speed: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need an object
    getCurrentPositionAsync(11);

    // $FlowExpectedError: `__accuracy` is missing in enum
    getCurrentPositionAsync({ __accuracy: 1 });
  });
});

describe('getHeadingAsync', () => {
  it('should passes when used properly', () => {
    getHeadingAsync().then(result => {
      (result.trueHeading: number);
      (result.magHeading: number);

      // $FlowExpectedError: check any
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

      // $FlowExpectedError: check any
      (result.backgroundModeEnabled: string);

      // $FlowExpectedError: `abcd` is missing
      (result.abcd: any);
    });
  });
});

describe('hasStartedGeofencingAsync', () => {
  it('should passes when used properly', () => {
    hasStartedGeofencingAsync('taskName').then(result => {
      (result: boolean);

      // $FlowExpectedError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need a string
    hasStartedGeofencingAsync(69);
  });
});

describe('hasStartedLocationUpdatesAsync', () => {
  it('should passes when used properly', () => {
    hasStartedLocationUpdatesAsync('taskName').then(result => {
      (result: boolean);

      // $FlowExpectedError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need a string
    hasStartedLocationUpdatesAsync(69);
  });
});

describe('setApiKey', () => {
  it('should passes when used properly', () => {
    (setApiKey('apiKey'): void);
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need a string
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

      // $FlowExpectedError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    startGeofencingAsync();

    // $FlowExpectedError: first argument mush be a string
    startGeofencingAsync(1337);

    startGeofencingAsync('taskName', [
      // $FlowExpectedError: must be a region object
      69,
    ]);

    startGeofencingAsync('taskName', [
      {
        latitude: 14,
        longitude: 48,
        // $FlowExpectedError: must be a number
        radius: '69',
      },
    ]);

    startGeofencingAsync('taskName', [
      // $FlowExpectedError: `abc` prop is missing in Region
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

      // $FlowExpectedError: check any
      (address.name: number);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    reverseGeocodeAsync();

    // $FlowExpectedError: first must be an object
    reverseGeocodeAsync(123);

    // $FlowExpectedError: object do not include required props `latitude,longitude`
    reverseGeocodeAsync({});

    // $FlowExpectedError: `abc` is extra props
    reverseGeocodeAsync({
      latitude: 1,
      longitude: 1,
      abc: 1,
    });

    reverseGeocodeAsync({
      // $FlowExpectedError: `latitude` must be a number
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

      // $FlowExpectedError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    startLocationUpdatesAsync();

    // $FlowExpectedError: first argument mush be a string
    startLocationUpdatesAsync(1337);

    // $FlowExpectedError: second argument must be an object
    startLocationUpdatesAsync('taskName', 69);

    startLocationUpdatesAsync('taskName', {
      // $FlowExpectedError: invalid accuracy
      accuracy: 1,
      // $FlowExpectedError: invalid activityType
      activityType: 1,

      // $FlowExpectedError: `notificationTitle` is required props
      foregroundService: { notificationBody: 'str' },
    });
  });
});

describe('stopGeofencingAsync', () => {
  it('should passes when used properly', () => {
    stopGeofencingAsync('taskName').then(result => {
      (result: void);

      // $FlowExpectedError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need a string
    stopGeofencingAsync(69);
  });
});

describe('stopLocationUpdatesAsync', () => {
  it('should passes when used properly', () => {
    stopLocationUpdatesAsync('taskName').then(result => {
      (result: void);

      // $FlowExpectedError: check any
      (result: string);
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need a string
    stopLocationUpdatesAsync(69);
  });
});

describe('watchHeadingAsync', () => {
  it('should passes when used properly', () => {
    watchHeadingAsync(data => {
      (data.trueHeading: number);
      (data.magHeading: number);
      (data.accuracy: number);

      // $FlowExpectedError: check any
      (data.accuracy: string);
    });
    watchHeadingAsync(async () => {}).then(result => {
      result.remove();
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: need a function
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

      // $FlowExpectedError: check any
      (coords.speed: string);
    });
    watchPositionAsync({}, async () => {}).then(result => {
      result.remove();
    });
  });

  it('should raise an error when call function with invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    watchPositionAsync();

    // $FlowExpectedError: first argument must be a n object
    watchPositionAsync(69);

    // $FlowExpectedError: second argument must be a function
    watchPositionAsync({}, 69);

    watchPositionAsync(
      {
        // $FlowExpectedError: invalid accuracy value
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

    // $FlowExpectedError: check any
    (result: number);
  });

  requestPermissionsAsync().then(result => {
    (result: void);

    // $FlowExpectedError: check any
    (result: number);
  });

  hasServicesEnabledAsync().then(result => {
    (result: boolean);

    // $FlowExpectedError: check any
    (result: number);
  });

  isBackgroundLocationAvailableAsync().then(result => {
    (result: boolean);

    // $FlowExpectedError: check any
    (result: number);
  });

  geocodeAsync('address').then(result => {
    const geocodedLocation = result[0];

    (geocodedLocation.latitude: number);
    (geocodedLocation.longitude: number);
    (geocodedLocation.altitude: ?number);
    (geocodedLocation.accuracy: ?number);

    // $FlowExpectedError: check any
    (geocodedLocation.latitude: string);
  });
});
