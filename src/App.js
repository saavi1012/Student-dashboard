import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Courselist from "./components/Courselist";
import Coursedetails from "./components/Coursedetails";
import Student from "./components/Student";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Courselist />} />
          <Route exact path="/Coursedetails/:id" element={<Coursedetails />} />
          <Route exact path="/Student/:id" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
