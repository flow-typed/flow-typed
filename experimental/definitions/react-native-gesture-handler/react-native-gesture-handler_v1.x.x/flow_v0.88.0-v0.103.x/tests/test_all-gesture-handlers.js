// @flow
import * as React from 'react';
import { describe, it } from 'flow-typed-test';
import {
  FlingGestureHandler,
  ForceTouchGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

describe('common part', () => {
  const AllGestureHandlers = [
    FlingGestureHandler,
    ForceTouchGestureHandler,
    LongPressGestureHandler,
    PanGestureHandler,
    PinchGestureHandler,
    RotationGestureHandler,
    TapGestureHandler,
  ];

  describe('event props', () => {
    it('should pass when use properly', () => {
      AllGestureHandlers.forEach(GestureHandler => {
        <GestureHandler
          onGestureEvent={event => {}}
          onHandlerStateChange={event => {}}
          onBegan={event => {}}
          onFailed={event => {}}
          onCancelled={event => {}}
          onActivated={event => {}}
          onEnded={event => {}}
        />;
      });
    });

    it('should raises an error when try overwrite event props', () => {
      AllGestureHandlers.forEach(GestureHandler => {
        <GestureHandler
          onGestureEvent={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
          onHandlerStateChange={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
          onBegan={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
          onFailed={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
          onCancelled={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
          onActivated={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
          onEnded={event => {
            // $ExpectError: event exact type
            event.nativeEvent.murAmur = 'test exact';
            // $ExpectError: event props readonly
            event.nativeEvent.state = 0;
            // $ExpectError: event props readonly
            event.nativeEvent = {};
          }}
        />;
      });
    });
  });
  describe('props', () => {
    it('should pass when use properly', () => {
      AllGestureHandlers.forEach(GestureHandler => {
        <GestureHandler
          id={'str'}
          enabled={true}
          waitFor={React.createRef()}
          simultaneousHandlers={React.createRef()}
          shouldCancelWhenOutside={false}
          minPointers={2}
          hitSlop={10}
        />;

        <GestureHandler
          waitFor={[React.createRef(), React.createRef()]}
          simultaneousHandlers={[React.createRef(), React.createRef()]}
          hitSlop={{
            left: 10,
            bottom: 10,
          }}
        />;
      });
    });

    it('should pass when render component without props', () => {
      AllGestureHandlers.forEach(GestureHandler => {
        <GestureHandler />;
      });
    });

    it('should raises an error when pass incompatible types', () => {
      AllGestureHandlers.forEach(GestureHandler => {
        <GestureHandler
          // $ExpectError: need string
          id={11}
          // $ExpectError: need boolean
          enabled={'true'}
          // $ExpectError: `murAmur` is missing
          hitSlop={{
            murAmur: 10,
          }}
        />;
      });
    });
  });
});

describe('FlingGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <FlingGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.x: number);
          (event.nativeEvent.y: number);
          (event.nativeEvent.absoluteX: number);
          (event.nativeEvent.absoluteY: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <FlingGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.x: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.y: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteX: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteY: string);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <FlingGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.forceShmorse;
        }}
      />;
    });
  });

  it('should have additional props', () => {
    <FlingGestureHandler numberOfPointers={2} direction={1} />;
  });

  it('should raises an error when use incompatible values for additional props', () => {
    <FlingGestureHandler
      // $ExpectError: need number
      numberOfPointers={'2'}
      // $ExpectError: need number
      direction={true}
    />;
  });
});

describe('ForceTouchGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <ForceTouchGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.force: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <ForceTouchGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.force: string);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <ForceTouchGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.absoluteY;
        }}
      />;
    });
  });

  it('should call static method `forceTouchAvailable`', () => {
    (ForceTouchGestureHandler.forceTouchAvailable(): boolean);
  });

  it('should have additional props', () => {
    <ForceTouchGestureHandler
      minForce={1}
      maxForce={1}
      feedbackOnActivation={false}
    />;
  });

  it('should raises an error when use incompatible values for additional props', () => {
    <ForceTouchGestureHandler
      // $ExpectError: need number
      minForce={'1'}
      // $ExpectError: need number
      maxForce={true}
      // $ExpectError: need boolean
      feedbackOnActivation={'false'}
    />;
  });

  it('should raises an error when pass missing props', () => {
    // $ExpectError: missing props in exact type
    <ForceTouchGestureHandler numberOfPointers={'2'} direction={true} />;
  });
});

describe('LongPressGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <LongPressGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.x: number);
          (event.nativeEvent.y: number);
          (event.nativeEvent.absoluteX: number);
          (event.nativeEvent.absoluteY: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <LongPressGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.x: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.y: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteX: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteY: string);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <LongPressGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.forceShmorse;
        }}
      />;
    });
  });

  it('should have additional props', () => {
    <LongPressGestureHandler minDurationMs={1} maxDist={1} />;
  });

  it('should raises an error when use incompatible values for additional props', () => {
    <LongPressGestureHandler
      // $ExpectError: need number
      minDurationMs={'1'}
      // $ExpectError: need number
      maxDist={[1]}
    />;
  });

  it('should raises an error when pass missing props', () => {
    // $ExpectError: missing props in exact type
    <LongPressGestureHandler
      minForce={'1'}
      maxForce={true}
      feedbackOnActivation={'false'}
    />;
  });
});

describe('PanGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <PanGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.x: number);
          (event.nativeEvent.y: number);
          (event.nativeEvent.absoluteX: number);
          (event.nativeEvent.absoluteY: number);
          (event.nativeEvent.translationX: number);
          (event.nativeEvent.translationY: number);
          (event.nativeEvent.velocityX: number);
          (event.nativeEvent.velocityY: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <PanGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.x: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.y: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteX: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteY: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.translationX: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.translationY: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.velocityX: boolean);
          // $ExpectError - this property have number type
          (event.nativeEvent.velocityY: boolean);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <PanGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.forceShmorse;
        }}
      />;
    });
  });

  it('should have additional props', () => {
    <PanGestureHandler
      activeOffsetY={1}
      activeOffsetX={1}
      failOffsetY={1}
      failOffsetX={1}
      minDist={1}
      minVelocity={1}
      minVelocityX={1}
      minVelocityY={1}
      minPointers={1}
      maxPointers={1}
      avgTouches={true}
    />;

    <PanGestureHandler
      activeOffsetY={[1, 2]}
      activeOffsetX={[1, 2]}
      failOffsetY={[1, 2]}
      failOffsetX={[1, 2]}
    />;
  });

  it('should raises an error when use array with more then two elements', () => {
    <PanGestureHandler
      // $ExpectError: need tuple [number, number]
      activeOffsetY={[1, 2, 3]}
      // $ExpectError: need tuple [number, number]
      activeOffsetX={[1, 2, 3]}
      // $ExpectError: need tuple [number, number]
      failOffsetY={[1, 2, 3]}
      // $ExpectError: need tuple [number, number]
      failOffsetX={[1, 2, 3]}
    />;
  });

  it('should raises an error when pass missing props', () => {
    // $ExpectError: missing props in exact type
    <PanGestureHandler minDurationMs={'1'} maxDist={[1]} />;
  });
});

describe('PinchGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <PinchGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.scale: number);
          (event.nativeEvent.focalX: number);
          (event.nativeEvent.focalY: number);
          (event.nativeEvent.velocity: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <PinchGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.scale: Array<any>);
          // $ExpectError - this property have number type
          (event.nativeEvent.focalX: Array<any>);
          // $ExpectError - this property have number type
          (event.nativeEvent.focalY: Array<any>);
          // $ExpectError - this property have number type
          (event.nativeEvent.velocity: Array<any>);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <PinchGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.x;
        }}
      />;
    });
  });
});

describe('RotationGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <RotationGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.rotation: number);
          (event.nativeEvent.anchorX: number);
          (event.nativeEvent.anchorY: number);
          (event.nativeEvent.velocity: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <RotationGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.rotation: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.anchorX: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.anchorY: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.velocity: string);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <RotationGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.x;
        }}
      />;
    });
  });
});

describe('TapGestureHandler', () => {
  describe('events', () => {
    it('GestureEvent should have additional properties', () => {
      <TapGestureHandler
        onGestureEvent={event => {
          (event.nativeEvent.x: number);
          (event.nativeEvent.y: number);
          (event.nativeEvent.absoluteX: number);
          (event.nativeEvent.absoluteY: number);
        }}
      />;
    });

    it('should raises an error when use incompatible type', () => {
      <TapGestureHandler
        onGestureEvent={event => {
          // $ExpectError - this property have number type
          (event.nativeEvent.x: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.y: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteX: string);
          // $ExpectError - this property have number type
          (event.nativeEvent.absoluteY: string);
        }}
      />;
    });

    it('should raises an error when use missing prop', () => {
      <TapGestureHandler
        onGestureEvent={event => {
          // $ExpectError - missing prop
          var a = event.nativeEvent.forceShmorse;
        }}
      />;
    });
  });

  it('should have additional props', () => {
    <TapGestureHandler
      maxDurationMs={1}
      maxDelayMs={1}
      numberOfTaps={1}
      maxDeltaX={1}
      maxDeltaY={1}
      maxDist={1}
      minPointers={1}
    />;
  });

  it('should raises an error when use array with more then two elements', () => {
    <TapGestureHandler
      // $ExpectError: need number
      maxDurationMs={'ups...'}
      // $ExpectError: need number
      maxDelayMs={'ups...'}
      // $ExpectError: need number
      numberOfTaps={'ups...'}
      // $ExpectError: need number
      maxDeltaX={'ups...'}
      // $ExpectError: need number
      maxDeltaY={'ups...'}
      // $ExpectError: need number
      maxDist={'ups...'}
      // $ExpectError: need number
      minPointers={'ups...'}
    />;
  });

  it('should raises an error when pass missing props', () => {
    // $ExpectError: missing props in exact type
    <TapGestureHandler
      activeOffsetY={[1, 2]}
      activeOffsetX={[1, 2]}
      failOffsetY={[1, 2]}
      failOffsetX={[1, 2]}
    />;
  });
});
