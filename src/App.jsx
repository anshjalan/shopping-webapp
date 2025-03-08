import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        {/* Navigation Bar */}
        <div className="bg-gray-700">
          <Navbar/>
        </div>
        {/* Pages according to route */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Home/>}/>
        </Routes>
  </div>)
};

export default App;
