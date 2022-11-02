import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  LanguageContext  from './Contexts/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageContext>
    <App />

  </LanguageContext>
);
