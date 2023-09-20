import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgnIiRSg1Gs15AIoxcH50sMc90fH-xv0g",
  authDomain: "feedback-app-5810e.firebaseapp.com",
  projectId: "feedback-app-5810e",
  storageBucket: "feedback-app-5810e.appspot.com",
  messagingSenderId: "1088766588953",
  appId: "1:1088766588953:web:f2c336409ed52371f41288",
  measurementId: "G-Y2R900WHZ8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };
// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID
