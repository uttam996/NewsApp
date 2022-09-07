
import './App.css';

import Navbar from './Component/Navbar';
import News from './Component/News';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<News key="general" category="general"/>} />
        <Route path="/general" element={<News key="general" category="general"/>} />
        <Route path="/business" element={<News key="business" category="business"/>} />
        <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>} />
        <Route path="/health" element={<News key="health" category="health"/>} />
        <Route path="/science" element={<News key="science" category="science"/>} />
        <Route path="/sports" element={<News key="sports" category="sports"/>} />
        <Route path="/technology" element={<News key="technology" category="technology"/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
