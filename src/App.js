import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="container main ">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/recipies" element={<Recipies />}/>
      <Route path="/Settings" element={<Settings />}/>
     </Routes>
    </div>
    <Footer/>
    </Router>
   
  )
}

export default App;
