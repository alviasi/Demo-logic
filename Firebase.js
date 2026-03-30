import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqPLAXT1pyRuR3BgAl9PyoXZjBEH861Gg",
  authDomain: "me-win.firebaseapp.com",
  projectId: "me-win",
  storageBucket: "me-win.firebasestorage.app",
  messagingSenderId: "124242461188",
  appId: "1:124242461188:web:c8383106a519a66f70ab51"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
