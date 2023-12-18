import React from 'react';
import './App.css';
import Header from './Header';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Sidebar from './Sidebar';


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCGGzUzxUOW_89-_VULQkLq9eKdMNz0nOU",
//   authDomain: "linkedin-3fa50.firebaseapp.com",
//   projectId: "linkedin-3fa50",
//   storageBucket: "linkedin-3fa50.appspot.com",
//   messagingSenderId: "584815778592",
//   appId: "1:584815778592:web:a5df5456f250fc33b99545",
//   measurementId: "G-KX77YEFH36"
// };


 
function App() {
  return (
    <div className="app">
        <Header />
    
     <div className='app-body'>

     <Sidebar />
     </div>
     </div>)
}

export default App;
