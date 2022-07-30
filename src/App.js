import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/Home";
import Test from "./routes/test";
import Clothes from "./routes/Clothes";
import Food from "./routes/Food";
import Toys from "./routes/Toys";
import Profile1 from "./routes/Profile1";
import BusiProfile from "./routes/BusiProfile";

function App() {
  // const [state, setState] = useState();

  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clothes" element={<Clothes />} />
          <Route path="/Toys" element={<Toys />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Profile1" element={<Profile1 />} />
          <Route path="/BusiProfile" element={<BusiProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
