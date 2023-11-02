import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBc71A3UCmtx1_ZQr6nqTbnymC84FFaqFA",
  authDomain: "cursinho-c4109.firebaseapp.com",
  projectId: "cursinho-c4109",
  storageBucket: "cursinho-c4109.appspot.com",
  messagingSenderId: "38733029233",
  appId: "1:38733029233:web:dd565a2a664232bd4e60d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

export const database = getDatabase(app);