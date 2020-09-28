// @flow

import firebase from 'firebase'
import 'firebase/firestore'
import app from '@firebase/app'
import auth from 'firebase/auth'
import database from 'firebase/database'

// #1
const a1: firebase.app.App = firebase.initializeApp({
  apiKey: 'apiKey',
  databaseURL: 'databaseURL',
  projectId: '42',
})

// #2
// $FlowExpectedError
const a2: firebase.app.App = firebase.initializeApp({
  storageBucker: 'storageBucket',
  projectId: '42',
})

// #3
const a3: app.App = app('DEFAULT')

// #4
firebase
  .auth()
  .createUserWithEmailAndPassword('email', 'password')
  .then()
  .catch()

// #5
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    user.displayName
    user.email
    user.emailVerified
    user.photoURL
    user.isAnonymous
    user.uid
    user.providerData
    // $FlowExpectedError
    user.foobar
  }
})

const currentUser = firebase.auth().currentUser


if (currentUser) {
  // #6
  currentUser.linkAndRetrieveDataWithCredential({
    providerId: 'providerId',
  })
  .then(userCredential => {
    userCredential.user
    // $FlowExpectedError
    userCredential.foobar
  })


  // #7
  const provider = new firebase.auth.GithubAuthProvider()
  currentUser.linkWithPopup(provider)
    .then(result => {
      result.credential
      result.additionalUserInfo
      result.operationType
      result.user
      // $FlowExpectedError
      result.foobar
    })

  // #8
  const provider2 = new firebase.auth.EmailAuthProvider()
  currentUser // $FlowExpectedError
    .linkWithPopup(provider2)
    .then(result => {
      result.credential
      result.additionalUserInfo
      result.operationType
      result.user
      // $FlowExpectedError
      result.foobar
    })
}



const prevUser = firebase.auth().currentUser
if (prevUser) {
  // #9
  const credential = { providerId: 'providerId' }
  firebase
    .auth()
    .signInWithCredential(credential)
    .then(user =>
      user.delete().then(() => prevUser.linkWithCredential(credential)),
    )
    .then(() => firebase.auth().signInWithCredential(credential))
}

// #10
firebase
  .database()
  .ref('users/42')
  .set({ username: 'foobar' })

// #11
firebase
  .database()
  .ref('users/42')
  .on('value', snp => {
    snp.val()
  })

// #12
firebase
  .database()
  .ref('users/42') // $FlowExpectedError
  .on('foo', snp => {
    snp.val()
  })

// #13
firebase
  .database()
  .ref('users/42')
  .orderByKey()
  .limitToLast(17)
  .once('child_added')
  .then(snp => snp.forEach(_ => true))

// #14
firebase
  .database()
  .ref('users/42')
  .orderByKey() // $FlowExpectedError
  .limitToLast('foo')

// #15
firebase
  .storage()
  .ref()
  .child('foo')
  .child('bar')

// #17
firebase
  .storage()
  .ref('/foo')
  .getMetadata()
  .then(metadata => {
    ;(metadata.bucket: string)
    // $FlowExpectedError
    metadata.foo
  })
  .catch()

// #18
firebase
  .storage()
  .ref('/foo')
  .put(new File(['foo'], 'foo.txt'))
  .then(snp => {
    ;(snp.bytesTransferred: number)
    // $FlowExpectedError
    snp.foo
  })
  .catch()

// #19
firebase
  .storage()
  .ref('/foo') // $FlowExpectedError
  .put('foobar')

// #20
const task = firebase
  .storage()
  .ref('/foo')
  .put(new File(['foo'], 'foo.txt'))
const subscribe = task.on('state_changed')
const unsubscribe = subscribe(snp => {
  ;(snp.bytesTransferred: number)
  // $FlowExpectedError
  snp.foo
})
;(unsubscribe(): void)

// #21
firebase
  .storage()
  .ref('/foo')
  .put(new File(['foo'], 'foo.txt'))
  .on('state_changed', snp => {
    ;(snp.bytesTransferred: number)
    // $FlowExpectedError
    snp.foo
  })()

// #22
firebase
  .storage()
  .ref('/foo')
  .put(new File(['foo'], 'foo.txt'))
  .on('state_changed', {
    next: snp => {
      ;(snp.bytesTransferred: number)
      // $FlowExpectedError
      snp.foo
    },
  })()

// #23
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
firebase.auth().setPersistence('local')

// $FlowExpectedError
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.FOO)
// $FlowExpectedError
firebase.auth().setPersistence('foo')

firebase
  .firestore()
  .doc('/foo/bar')
  .get()
  .then(snapshot => {
    ;(snapshot.id: string)
    // $FlowExpectedError
    snapshot.foo
  })
  .catch()

// #24
firebase
  .firestore()
  .doc('/foo/bar')
  .get()
  .then(snapshot => {
    ;(snapshot.id: string)
    // $FlowExpectedError
    snapshot.foo
    // $FlowExpectedError
    snapshot.forEach(snapshot => {})
  })
  .catch()

// #25
;(firebase.firestore().doc('/foo/bar').id: string)

// #26
// $FlowExpectedError
firebase
  .firestore()
  .doc('/foo/bar')
  .limit(4)

// #27
firebase
  .firestore()
  .collection('/foo/bar')
  .get()
  .then(snapshots => {
    snapshots.forEach(snapshot => {
      ;(snapshot.id: string)
    })
    // $FlowExpectedError
    snapshots.foo
  })
  .catch()

// #28
firebase
  .firestore()
  .collection('/foo')
  .limit(4)
  .endAt({ foo: 4 })
  .endBefore({ bar: 5 })
  .startAt({ foo: 1 })
  .startAfter({ bar: 2 })
  .orderBy(new firebase.firestore.FieldPath('foo', 'bar'), 'asc')
  .get()
  .then(snapshots => {
    snapshots.forEach(snapshot => {
      ;(snapshot.id: string)
    })
    // $FlowExpectedError
    snapshots.foo
  })
  .catch()

// #29
firebase
  .firestore()
  .collection('/foo')
  .get({ source: 'cache' })

// #30
firebase
  .firestore()
  .getAll(
    firebase.firestore().doc('col/doc1'),
    firebase.firestore().doc('col/doc2'));

// #31
firebase
  .firestore()
  .collection('/foo')
  .where('id', '==', '5')
  .get({ source: 'cache' });

// #32
firebase
 .firestore()
 .collection('/foo')
 .where('id', 'array-contains', '5')
 .get({ source: 'cache' });

// #33
firebase
 .firestore()
 .collection('/foo')
 // $FlowExpectedError
 .where('id', 'lte', '5')
 .get({ source: 'cache' });

// #34
firebase
  .firestore()
  .collection('/foo')
  .add({foo: 'bar'})
  .then(document => {
    const id = document.id
  })

// #35
firebase
  .firestore()
  .collection('/foo')
  .add({foo: 'bar'})
  .then(document => {
    // $FlowExpectedError
    const foo = document.foo
  })

// #36
firebase
  .firestore()
  .runTransaction((transaction) => Promise.resolve({foo: 'bar'}))
  .then(object => {
    const foo = object.foo
  })

// #37
firebase
  .firestore()
  .collection('/foo')
  .doc('bar')
  .update({ regions: firebase.firestore.FieldValue.arrayUnion('east_coast') });

// #38
firebase
  .firestore()
  .collection('/foo')
  .doc('bar')
  .update({ regions: firebase.firestore.FieldValue.arrayRemove('east_coast') });

// #39
firebase
  .firestore()
  .enableNetwork()
  .then(() => {});

// #40
firebase
  .firestore()
  .disableNetwork()
  .then(() => {});

// #41
firebase
  .firestore()
  .settings({ /* empty settings option */ });

// #42
firebase
  .firestore()
  .settings({ host: 'random_host', ssl: true, timestampsInSnapshots: false, cacheSizeBytes: 0 });

// #43
firebase
  .firestore()
  .enablePersistence()
  .then(() => {});

// #44
firebase
  .firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .then(() => {});

// #45

firebase
  .firestore()
  .collection('listened-collection')
  .onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(c => {
      // test the newly added typedef for doc change
      (c.type: string);
      (c.doc.id: string);
      (c.oldIndex: number);
      (c.newIndex: number);
    });
  });
