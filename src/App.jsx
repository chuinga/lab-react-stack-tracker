import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    
    <div className="App">
      <div className="pages">        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/company/:companyName' element={<CompanyPage />} />
          <Route path='/tech/:technolySlug' element={<TechnologyPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
