

function tp(url){
    console.log("Redirecting to", url);
    setTimeout(()=>{},1000)
    window.location.href = url;
}
function call(log, type, conditional) {
    switch (type) {
        case "log":
            console.log(log);
            break;
        case "error":
            console.error(log);
            break;
        case "info":
            console.info(log);
            break;
        case "warn":
            console.warn(log);
            break;
        case "debug":
            console.debug(log);
            break;
        case "starttimer":
            console.time(log);
            break;
        case "endtimer":
            console.timeEnd(log);
            console.timeLog(log);
            break;
        case "trace":
            console.trace(log);
            break;
        case "assert":
            console.assert(conditional, log);
            break;
        default:
            console.error("Error Function: Invalid Type: ", type,"Input:",log);
            break;
    }
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