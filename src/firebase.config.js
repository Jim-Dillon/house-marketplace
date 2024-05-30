import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZH7ZrDO0npGs_KNY-nQ-nXdaswseuCVo",
  authDomain: "house-marketplace-app-ee781.firebaseapp.com",
  projectId: "house-marketplace-app-ee781",
  storageBucket: "house-marketplace-app-ee781.appspot.com",
  messagingSenderId: "562830425679",
  appId: "1:562830425679:web:6da137206aac0ce77af43a"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()