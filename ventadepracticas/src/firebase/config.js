import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD969Kk1bWjc3g7mfeOyqIQ7741EW0snTw",
  authDomain: "venta-de-practicas-react.firebaseapp.com",
  projectId: "venta-de-practicas-react",
  storageBucket: "venta-de-practicas-react.appspot.com",
  messagingSenderId: "715260324301",
  appId: "1:715260324301:web:f00a47b9313047c3713c84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function iniFirebase() {
  return app;
}
