import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your credentials',
  projectId: 'your credentials',
  storageBucket: 'your credentials',
  messagingSenderId: 'your credentials',
  appId: 'your credentials',
};

const app = initializeApp(firebaseConfig);
