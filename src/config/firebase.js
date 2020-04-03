import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZ4YESd1XzBO-wa1D6Txa4hAvrZrsq1hI",
  authDomain: "mathome-a2bd5.firebaseapp.com",
  databaseURL: "https://mathome-a2bd5.firebaseio.com",
  projectId: "mathome-a2bd5",
  storageBucket: "mathome-a2bd5.appspot.com",
  messagingSenderId: "401938557843",
  appId: "1:401938557843:web:a0d64c7622872156535666",
  measurementId: "G-F9ML7LB38D"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase

