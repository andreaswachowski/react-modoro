import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAN-oHv7QdhDSmhBNHltlP9wDQWI7Z3-CM',
  authDomain: 'react-modoro.firebaseapp.com',
  databaseURL: 'https://react-modoro.firebaseio.com',
  storageBucket: 'react-modoro.appspot.com',
  messagingSenderId: '465742718624'
});

const ref = firebase.database().ref();
const firebaseAuth = firebase.auth();
const facebookProvider = firebase.auth.FacebookAuthProvider;

export {
  ref,
  firebaseAuth,
  facebookProvider
};
