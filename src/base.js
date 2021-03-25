/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
  projectId: 'switch-94008',
  appId: '1:444304146861:web:c66bfad45d4a1c5f1b2124',
  storageBucket: 'switch-94008.appspot.com',
  locationId: 'europe-west',
  apiKey: 'AIzaSyDDrB4q7u28y4w9vpBzAf70byyhdUSfbOw',
  authDomain: 'switch-94008.firebaseapp.com',
  messagingSenderId: '444304146861',
});
