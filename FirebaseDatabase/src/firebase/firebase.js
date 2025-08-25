

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD5r2YPq0VwrgtYVzlP2RDWlsRb9Pe0pUw",
  authDomain: "fir-detabase-32ede.firebaseapp.com",
  projectId: "fir-detabase-32ede",
  storageBucket: "fir-detabase-32ede.firebasestorage.app",
  messagingSenderId: "446447255508",
  appId: "1:446447255508:web:0bda16c5d94f82d7202041"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

