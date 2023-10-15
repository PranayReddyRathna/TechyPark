import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Query from './components/Query';
import Footer1 from './components/Footer1';
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/query.scss";
import "./styles/footer.scss"
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
      <Footer1 />
    </Router>
   
    </>
   
  );
}

export default App;
