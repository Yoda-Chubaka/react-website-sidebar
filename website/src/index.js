import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Header from "./Pages/Header/Header";
import Main from "./Pages/Main/Main";
import Footer from "./Pages/Footer/Footer";
import Sidebar from "./Pages/Sidebar/Sidebar";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </div>
);


