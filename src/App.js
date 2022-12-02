import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
