import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import PortfolioContainer from './containers/PortfolioContainer';
import NavBar from './components/NavBar';
import PortfolioList from './components/PortfolioList';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
           <Route path='/' element={<PortfolioContainer/>} />
           <Route path='portfolioList' element={<PortfolioList/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
