import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// config del firebase 

const firebaseConfig = {
    apiKey: "AIzaSyDYCHgw1q3mEsuHV0XmMxKT1dnkB3R_TFY",
    authDomain: "challenge-11-y-12.firebaseapp.com",
    projectId: "challenge-11-y-12",
    storageBucket: "challenge-11-y-12.firebasestorage.app",
    messagingSenderId: "837373268979",
    appId: "1:837373268979:web:a4de13c79c0c31270ef886",
    measurementId: "G-Z0NYRP2Z31"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const googleProvider = new GoogleAuthProvider(); 

export { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup, signOut }
