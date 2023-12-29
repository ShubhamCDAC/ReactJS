// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmkBJrXWZvllE_rlSnARtg4LDvF4wxKF4",
  authDomain: "vite-contact-30578.firebaseapp.com",
  projectId: "vite-contact-30578",
  storageBucket: "vite-contact-30578.appspot.com",
  messagingSenderId: "25952083485",
  appId: "1:25952083485:web:07ec311e35e32b064d30f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  