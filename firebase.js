// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfblMcNM2cjYAiFqYyjAdfMjtI0nTe2Y",
  authDomain: "thetag-uk.firebaseapp.com",
  projectId: "thetag-uk",
  storageBucket: "thetag-uk.appspot.com",
  messagingSenderId: "555691968381",
  appId: "1:555691968381:web:609ac4ccbf714b84a62e14",
  measurementId: "G-JD4VPHWK12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);