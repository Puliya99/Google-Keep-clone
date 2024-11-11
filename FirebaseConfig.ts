// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-rH5yl6qTSyE51FmFMLbiU7ucKyybUqc",
  authDomain: "keep-c3c41.firebaseapp.com",
  projectId: "keep-c3c41",
  storageBucket: "keep-c3c41.firebasestorage.app",
  messagingSenderId: "844059548996",
  appId: "1:844059548996:web:1dffa50e8b646fd5a54b11",
  measurementId: "G-529EY5ZL3Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

//storage
export const storage=getStorage(app);