import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Query from './components/Query';
import "./styles/header.scss"
import "./styles/home.scss"
function App() {
  return (
    <>
    
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/query" element={<Query />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
   
    </>
   
  );
}

export default App;
