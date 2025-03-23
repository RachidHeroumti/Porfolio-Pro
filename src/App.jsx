import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio1 from './TestPotfolios/Portfolio1';
import AllProjects from './component/AllProjects';
import 'typeface-poppins';
import NavBar from './component/NavBar';
import Contact from './component/Contact';
import AboutMe from './component/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio1 />} />
        <Route path="/projects" element={
           <>
           <NavBar />
           <AllProjects />
           <AboutMe/>
         </>
          } />
      </Routes>
    </Router>
  );
}

export default App;
