import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TopicProvider } from './TopicContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TopicProvider>
    <App />
  </TopicProvider>
);

<script src="https://kit.fontawesome.com/398e3e430d.js" crossorigin="anonymous"></script>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
