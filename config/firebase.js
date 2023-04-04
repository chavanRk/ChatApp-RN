import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
//   apiKey: Constants.manifest.extra.apiKey,
//   authDomain: Constants.manifest.extra.authDomain,
//   projectId: Constants.manifest.extra.projectId,
//   storageBucket: Constants.manifest.extra.storageBucket,
//   messagingSenderId: Constants.manifest.extra.messagingSenderId,
//   appId: Constants.manifest.extra.appId,
//   databaseURL: Constants.manifest.extra.databaseURL
  apiKey: "AIzaSyDODlWLJnSsy6wXL04nkSX0FVZMNW0jmfY",
  authDomain: "chat-app-b1233.firebaseapp.com",
  projectId: "chat-app-b1233",
  storageBucket: "chat-app-b1233.appspot.com",
  messagingSenderId: "665412793611",
  appId: "1:665412793611:web:a6aa0992135b9b4628de0e"
};

// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();