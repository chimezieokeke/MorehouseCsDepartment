import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcDejVzd10bMkZakoh00-PrAMUW93iUOY",
  authDomain: "full-stack-dev-f23dd.firebaseapp.com",
  projectId: "full-stack-dev-f23dd",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "1002004604677",
  appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;
