import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfoGkBLX5HyWEpuhXvMSafd8wJQiqPcP8",
  authDomain: "dashboard-template-4.firebaseapp.com",
  projectId: "dashboard-template-4",
  storageBucket: "dashboard-template-4.appspot.com",
  messagingSenderId: "14291208338",
  appId: "1:14291208338:web:405317beca888edbe6fe4b",
  measurementId: "G-499LK54XST",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore();
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

export { auth, GoogleProvider, GithubProvider, db, storage };
