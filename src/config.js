// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdjm6C4whweBnplK8lCHO3Q-RPnw2ZjQ4",
  authDomain: "studentdetails-360cd.firebaseapp.com",
  projectId: "studentdetails-360cd",
  storageBucket: "studentdetails-360cd.appspot.com",
  messagingSenderId: "107216481565",
  appId: "1:107216481565:web:7dc8118fd0b20fdcb285f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);