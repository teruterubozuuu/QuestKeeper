// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmKGXUd9i1w9rx4gmJbKj_3vsMftxGve0",
  authDomain: "questkeeper-bd4d6.firebaseapp.com",
  projectId: "questkeeper-bd4d6",
  storageBucket: "questkeeper-bd4d6.firebasestorage.app",
  messagingSenderId: "593672827029",
  appId: "1:593672827029:web:0bba6a2f1b8537d9e46b9c",
  measurementId: "G-V46VG5Y8DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;