import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, serverTimestamp} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBNk9_u92r0vffL8L1WGxBliTLXpP-tbpM",
  authDomain: "clone-c6054.firebaseapp.com",
  projectId: "clone-c6054",
  storageBucket: "clone-c6054.appspot.com",
  messagingSenderId: "959499170488",
  appId: "1:959499170488:web:b7f36f548269d1947e7a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
const timestamp = new serverTimestamp()

export {app, db , auth, provider, timestamp }