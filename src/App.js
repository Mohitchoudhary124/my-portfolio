import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Home from './Pages/Home';


function App() {
  return (
 
  <Router>
  <nav className='w-full px-5 sm:px-10 py-5 shadow-xl backdrop-blur-bg fixed-top-0 z-10'>
  <div className='container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto '>
    <h3 className='text-3xl text-blue-500 font-bold'><Link to="/" >Cloud1 Web Solution</Link></h3>
      <ul className='flex gap-3 align-center p-1 flex-wrap '>
          <li>
              <Link to="/" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-blue-600'>Home</Link>
          </li>
          <li>
              <Link to="/about" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-blue-600'>About</Link>
          </li>
          <li>
              <Link to="/skills" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-blue-600'>Skills</Link>
          </li>
          <li>
              <Link to="/projects" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-blue-600'>Projects</Link>
          </li>
          <li>
              <Link to="/contact" className='text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-blue-600'>Contact</Link>
          </li>
      </ul>
  </div>
  </nav>
      <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>      
</Router>
  );
}

export default App;
