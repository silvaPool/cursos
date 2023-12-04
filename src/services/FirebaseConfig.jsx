import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDR7oDMOtoCROLeznqlmUDm2Q4zg3x7Pz0",
  authDomain: "reino-8d2c2.firebaseapp.com",
  projectId: "reino-8d2c2",
  storageBucket: "reino-8d2c2.appspot.com",
  messagingSenderId: "23907442256",
  appId: "1:23907442256:web:093e2f0fcfab3a2e043b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

export const database = getDatabase(app);