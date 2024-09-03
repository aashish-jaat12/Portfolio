import React from 'react';
import ReactDOM from 'react-dom/client';
import whatapp from  '../src/Component/assets/WhatsApp.png'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    <div className='fixeds-bottom ' style={{zIndex: '6', left: 'initial'}} >
      <a href='https://wa.me/message/356ZNFGLQ6VRE1 ' target='_blank'>
    
      <img src={whatapp} alt="help..." /></a>
      
        </div>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
