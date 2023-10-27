import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

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