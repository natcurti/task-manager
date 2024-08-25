import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQYs4YAR3cuj5REcRm7PcFxqLRszgK65M",
  authDomain: "task-manager-e023a.firebaseapp.com",
  projectId: "task-manager-e023a",
  storageBucket: "task-manager-e023a.appspot.com",
  messagingSenderId: "922176669802",
  appId: "1:922176669802:web:0ef654e52eb35bed512213",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
