// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyByqGCNUSdfuF7coAs331YrcPYhH0bkEJM",
  authDomain: "portfolio-ff940.firebaseapp.com",
  projectId: "portfolio-ff940",
  storageBucket: "portfolio-ff940.firebasestorage.app",
  messagingSenderId: "635260648058",
  appId: "1:635260648058:web:d673aa55d0937713bb19c3",
  measurementId: "G-40R48ZJ7DX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
