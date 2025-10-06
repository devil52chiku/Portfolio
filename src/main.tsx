import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHMi_6NtyzjEBX9sZrnV1cZvydrt5f40",
  authDomain: "entity-2707a.firebaseapp.com",
  projectId: "entity-2707a",
  storageBucket: "entity-2707a.firebasestorage.app",
  messagingSenderId: "672248845585",
  appId: "1:672248845585:web:a5441126bf710d6c6368b0",
  measurementId: "G-CKBLDTH30W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")!).render(<App />);
