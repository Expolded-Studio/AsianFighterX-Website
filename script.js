

function tp(url){
    console.log("Redirecting to", url);
    setTimeout(()=>{},1000)
    window.location.href = url;
}



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS3aaO01sy3PWsMhGcy5QOimEFPW4g5zc",
  authDomain: "asianfighterx-website.firebaseapp.com",
  databaseURL: "https://asianfighterx-website-default-rtdb.firebaseio.com",
  projectId: "asianfighterx-website",
  storageBucket: "asianfighterx-website.appspot.com",
  messagingSenderId: "791740860737",
  appId: "1:791740860737:web:1fb095dc77348eb8f7f9c0",
  measurementId: "G-TXEP8ZM0KR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);