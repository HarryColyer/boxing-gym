import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Navigation from "./assets/components/Navigation";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-stone-950 text-stone-100">
          <Navigation />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
