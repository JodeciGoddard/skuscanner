import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Scan from "./screens/Scan";
import MobileNav from "./components/MobileNav";
import MobileScan from "./screens/MobileScan"


function App() {

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  })

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          {width > 768 ? <Route path="/" element={<Navigation />}>
            <Route path="scan" element={<Scan />} />
          </Route>
            :
            <Route path="/" element={<MobileNav />}>
              <Route path="scan" element={<MobileScan />} />
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
