import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "animate.css";
import Home from "./components/Home";
import NotFound from "./components/NotFoud";
import { AppTheme } from "./theme";

function App() {
  return (
    <AppTheme>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
