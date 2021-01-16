import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCqMKQY2JChqBE9-lfWmZ0fvcI0WSYACC0",
  authDomain: "handson-3d5c1.firebaseapp.com",
  projectId: "handson-3d5c1",
  storageBucket: "handson-3d5c1.appspot.com",
  messagingSenderId: "769003166043",
  appId: "1:769003166043:web:d2bbda4a0683735c37627e",
  measurementId: "G-N90LFL17WB"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


