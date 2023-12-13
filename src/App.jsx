import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { useState } from "react";
import Navbar from "./components/Navbar";


function App() {  
 return (  
    <div className="App">
      <Navbar />
      <div className="pages"> 
               
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/company/:companySame' element={<CompanyPage />} />
          <Route path='/tech/:technolySlug' element={<TechnologyPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
