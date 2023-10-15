import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCR8xx1GXUfeV4eedYF83dgg27guUF67ro",
  authDomain: "discode-clone-6bb08.firebaseapp.com",
  projectId: "discode-clone-6bb08",
  storageBucket: "discode-clone-6bb08.appspot.com",
  messagingSenderId: "47295221796",
  appId: "1:47295221796:web:ad1a612f8fdf0975c1c8b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
