import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-dEaa1eXvcrEyNwQLjwgfD-yn2g8yY64",
  authDomain: "uv-ledger-tax-solutions.firebaseapp.com",
  projectId: "uv-ledger-tax-solutions",
  storageBucket: "uv-ledger-tax-solutions.firebasestorage.app",
  messagingSenderId: "752174688927",
  appId: "1:752174688927:web:8c8b069c81b6498abd0aa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);