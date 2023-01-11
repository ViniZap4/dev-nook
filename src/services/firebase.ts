import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "dev-nook.firebaseapp.com",
  projectId: "dev-nook",
  storageBucket: "dev-nook.appspot.com",
  messagingSenderId: "845974677668",
  appId: "1:845974677668:web:dbcbc324546d5d8ca19e31",
  measurementId: "G-1206K1X8PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
