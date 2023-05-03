
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/aboutus" element={<About  />} />
        <Route path="/menu" element={<Menu  />} />
      </Routes>
        </Router>
    </>
  );
}

export default App;
