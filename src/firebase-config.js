import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCj5L0hhiJiGLj-lhxkt8n4Wg1RcwuMT-0",
  authDomain: "fir-mastery-1c102.firebaseapp.com",
  databaseURL: "https://fir-mastery-1c102-default-rtdb.firebaseio.com",
  projectId: "fir-mastery-1c102",
  storageBucket: "fir-mastery-1c102.appspot.com",
  messagingSenderId: "1041540438975",
  appId: "1:1041540438975:web:63d0c1bf4407fe719f1f0a",
  measurementId: "G-DGT0HTJXW4",
  databaseURL: "https://fir-mastery-1c102-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
