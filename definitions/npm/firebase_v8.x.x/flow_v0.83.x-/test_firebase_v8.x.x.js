// @flow
import { describe, it } from 'flow-typed-test';
import firebase, { type Firestore$Collection } from 'firebase/app';
import analytics from 'firebase/analytics';
import auth from 'firebase/auth';
import firestore from 'firebase/firestore';

describe('firebase', () => {
  it('INTERNAL', () => {
    // It's an object with stuff in it
    firebase.INTERNAL.a();
  });

  it('SDK_VERSION', () => {
    firebase.SDK_VERSION.toLowerCase();
    // $FlowExpectedError[incompatible-cast] Is a string
    (firebase.SDK_VERSION: number);
  });

  it('initializeApp', () => {
    // Can accept basically nothing
    firebase.initializeApp({});

    // Testing all object property types
    firebase.initializeApp({
      apiKey: 'test',
      authDomain: 'test',
      projectId: 'test',
      storageBucket: 'test',
      messagingSenderId: 'test',
      appId: 'test',
      measurementId: 'test',
    });

    // $FlowExpectedError[prop-missing] can't pass invalid properties
    firebase.initializeApp({
      random: 'test',
    });

    // $FlowExpectedError[incompatible-call]
    firebase.initializeApp();
  });

  describe('auth', () => {
    const auth = firebase.auth();

    it('currentUser', () => {
      // $FlowExpectedError[incompatible-use] current user won't exist if not logged in
      auth.currentUser.email;

      if (auth.currentUser) {
        auth.currentUser.email.toLowerCase();
      }
    });

    it('createUserWithEmailAndPassword', () => {
      auth.createUserWithEmailAndPassword('test', 'test').then(({ user }) => {
        user.email.toLowerCase();
        // $FlowExpectedError[prop-missing] it's typed as current user obj
        user.random;
      });
      // $FlowExpectedError[incompatible-call] missing password
      auth.createUserWithEmailAndPassword('test');
      // $FlowExpectedError[incompatible-call] must have email and password
      auth.createUserWithEmailAndPassword();
    });

    it('onAuthStateChanged', () => {
      const empty: void = auth.onAuthStateChanged((res) => {
        res.email.toLowerCase();
        // $FlowExpectedError[prop-missing] it's typed as current user obj
        res.random
      });
    });

    it('signInWithEmailAndPassword', () => {
      auth.signInWithEmailAndPassword('test', 'test').then(({ user }) => {
        user.email.toLowerCase();
        // $FlowExpectedError[prop-missing] it's typed as current user obj
        user.random;
      });
      // $FlowExpectedError[incompatible-call] missing password
      auth.signInWithEmailAndPassword('test');
      // $FlowExpectedError[incompatible-call] must have email and password
      auth.signInWithEmailAndPassword();
    });

    it('signOut', () => {
      auth.signOut().then((res) => {
        (res: void);
      });

      // $FlowExpectedError[extra-arg] accepts no args
      auth.signOut('test')
    });
  });

  describe('firestore', () => {
    const firestore = firebase.firestore();

    describe('collection', () => {
      // $FlowExpectedError[incompatible-call] must be passed a collection id
      firestore.collection();
      const collection = firestore.collection('test');

      it('add', () => {
        collection.add({ a: 'b' }).then((res) => {
          res.id.toLowerCase();
          // $FlowExpectedError[prop-missing] it's typed as a doc ref
          res.random;
        });
      });

      it('doc', () => {
        const doc = collection.doc('test');
        doc.get().then(({ data }) => {
          // data() typed as any because it can be anything
          const a: string = data();
        });
        doc.set({ a: 'b' }).then((res) => {
          res.id.toLowerCase();
          // $FlowExpectedError[prop-missing] it's typed as a doc ref
          res.random;
        });
        doc.update({ a: 'b' }).then((res) => {
          res.id.toLowerCase();
          // $FlowExpectedError[prop-missing] it's typed as a doc ref
          res.random;
        });
        doc.delete().then((res) => {
          (res: void);
        });
        (doc.collection: Firestore$Collection);

        // $FlowExpectedError[incompatible-call] must be passed a doc id
        collection.doc();
      });

      it('get', () => {
        collection.get().then(({ forEach }) => {
          const empty: void = forEach((res) => {
            res.id.toLowerCase();
            // data() typed as any because it can be anything
            const a: string = res.data();
          });
        });
      });

      it('onSnapshot', () => {
        const unsub = collection.onSnapshot(({ forEach }) => {
          const empty: void = forEach((res) => {
            res.id.toLowerCase();
            // data() typed as any because it can be anything
            const a: string = res.data();
          });
        });

        unsub();
        // $FlowExpectedError[extra-arg] takes no args
        unsub('test');
      });

      it('where', () => {
        const value = collection.where('test', '<');
        value.get();
        value.onSnapshot(() => {});
        // $FlowExpectedError[prop-missing] checking that it's not any typed
        value.random();

        // $FlowExpectedError[incompatible-call] can only accept a subset of values for second arg
        collection.where('test', 'blah');
      });
    });
  });
});

describe('firebase/analytics', () => {
  const analytic = analytics();

  it('logEvent', () => {
    analytic.logEvent('test');
    analytic.logEvent('test', { a: 'b' });

    // $FlowExpectedError[incompatible-call] needs at least the event name
    analytic.logEvent();
    // $FlowExpectedError[incompatible-call] event must be string
    analytic.logEvent(123);
    // $FlowExpectedError[incompatible-call] second arg must be object
    analytic.logEvent('test', 'test');
  });

  it('setUserProperties', () => {
    analytic.setUserProperties({ a: 'b' });

    // $FlowExpectedError[incompatible-call] must have args
    analytic.setUserProperties();
    // $FlowExpectedError[incompatible-call] arg must be string
    analytic.setUserProperties('test');
    // $FlowExpectedError[extra-arg] only takes one arg
    analytic.setUserProperties({ a: 'b' }, 'test');
  });
});

describe('firebase/auth', () => {
  it('returns void', () => {
    (auth: void)
  });
});

describe('firebase/firestore', () => {
  it('returns void', () => {
    (firestore: void)
  });
});
