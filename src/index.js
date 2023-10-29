import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/frontend/Pages/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/assets/frontend/css/font-awesome.min.css';
import './components/assets/frontend/css/elegant-icons.css';
import './components/assets/frontend/css/flaticon.css';
import './components/assets/frontend/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/home1" element={<Home />} />
                </Routes>
            </App>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
