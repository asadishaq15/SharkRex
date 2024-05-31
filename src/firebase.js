// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD5oaE2ykCSuyT33mVM-pd7r_j2m-R4z8Q",
    authDomain: "sharkrex-c32cd.firebaseapp.com",
    projectId: "sharkrex-c32cd",
    storageBucket: "sharkrex-c32cd.appspot.com",
    messagingSenderId: "805979489525",
    appId: "1:805979489525:web:2c00ddeaaf8d26d530b1bc",
    measurementId: "G-DNGT1YDFLH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, analytics, auth };
