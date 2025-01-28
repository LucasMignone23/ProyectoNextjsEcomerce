import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgvHnjh0J1Qe6dfY1WZVuCzSGlWN6lbQk",
  authDomain: "ecommercephina.firebaseapp.com",
  projectId: "ecommercephina",
  storageBucket: "ecommercephina.firebasestorage.app",
  messagingSenderId: "624247508524",
  appId: "1:624247508524:web:23613aa2e3d9d8cb128b89",
  measurementId: "G-357CM99S2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);