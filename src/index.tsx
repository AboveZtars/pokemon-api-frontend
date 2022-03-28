import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDssIREF08AFBr1nc4LMVOAWdW-12TYKn0",
  authDomain: "sistema-pokemon.firebaseapp.com",
  projectId: "sistema-pokemon",
  storageBucket: "sistema-pokemon.appspot.com",
  messagingSenderId: "569305840257",
  appId: "1:569305840257:web:dbdc52859750a7c8042b80",
  measurementId: "G-CWRFMJ5EHL"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
