// @flow
import { describe, it } from 'flow-typed-test';
import firebase from 'firebase/app';
import analytics from 'firebase/analytics';
import auth from 'firebase/auth';
import firestore from 'firebase/firestore';

describe('firebase', () => {
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
        user.random
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
        user.random
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
});

describe('firebase/analytics', () => {
  it('returns void', () => {
    (analytics: void)
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
