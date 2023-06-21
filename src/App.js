import React from "react";
import Navigation from './components/navigation';
import Services from "./components/Services";
import Footer from "./components/Footer";

import './App.css'

export default function App() {
  return(
    <div className="App">
      <Navigation />
      <Services />
      <Footer />
      </div>
      
  )
}