import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApzf5snsAOccmca3UFR25U1tuQcKv0QPk',
  authDomain: 'lifeloom-4708b.firebaseapp.com',
  projectId: 'lifeloom-4708b',
  storageBucket: 'lifeloom-4708b.appspot.com',
  messagingSenderId: '1016755450668',
  appId: '1:1016755450668:web:cb4372997cec271a76b289',
  measurementId: 'G-2V4BLQ1364',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
