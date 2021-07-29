import React from "react";
import './styles.css';
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="app">
      <Routes/>
      <ToastContainer autoColse={3000}/>
    </div>
  );
}

export default App;
