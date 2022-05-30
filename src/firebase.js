// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAFbpsU30aZaRE870HzuwRAyiOCdyD4Ls",
  authDomain: "classroom-41b11.firebaseapp.com",
  projectId: "classroom-41b11",
  storageBucket: "classroom-41b11.appspot.com",
  messagingSenderId: "59725266246",
  appId: "1:59725266246:web:2dfc1cbe216ffe4ca77947",
  measurementId: "G-DGC4FEEH5X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;