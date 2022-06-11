import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import Page1 from "./pages/page1";
import Page2 from  "./pages/page2";
import Page3 from "./pages/page3";
import Table from "./pages/table";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route path="/page1" element={<Page1/>} />   
         <Route path="/page2" element={<Page2/> } />  
         <Route path="/page3" element={<Page3/> } /> 
         <Route path="/table" element={<Table/> } />     
  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
