// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQ8yUWrNhBLuM420S1j0Z__FRh4Xl3p0",
  authDomain: "the-children-cloud.firebaseapp.com",
  projectId: "the-children-cloud",
  storageBucket: "the-children-cloud.appspot.com",
  messagingSenderId: "778595612271",
  appId: "1:778595612271:web:6a8ed74fa1fdbee93d7f9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
